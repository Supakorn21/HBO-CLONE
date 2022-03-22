import Link from "next/link";
import { useStateContext } from "../../HBOProvider";
import { useClickOutSide } from "../../Hooks/useClickOutSide";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ls from 'local-storage'

const Account = (props) => {
  const globalState = useStateContext();

  const router = useRouter();
  // const loopComp = (comp, digit) => {
  //   let thumbnails = [];
  //   for (let index = 1; index <= digit; index++) {
  //     thumbnails.push(comp);
  //   }

  //   return thumbnails;
  // };
  useEffect(() => {
    if (globalState.accountModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.accountModalOpen]);

  const watchMedia = (url) => {
    router.push(url);
    globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
  };

  const signOut = () => {
    ls.remove('users')
    router.push('/create')
  }
  


  const showWatchList = () => {
    return globalState.watchList.map((item, index) => {
      return (
        <div className="account__watch-video" key={index}>
          <img src={item.mediaUrl} />
          <div className="account__watch-overlay">
            <div className="account__watch-buttons">
              <div className="account__watch-circle" onClick={() => watchMedia(`/${item.mediaType}/${item.mediaId}`)}>
                <i className="fas fa-play"></i>
              </div>
              <div
                className="account__watch-circle"
                onClick={() => globalState.removeFromList(item.mediaId)}
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className={`account ${
        globalState.accountModalOpen ? "account--active" : ""
      }`}
    >
      <div className="account__details ">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          {globalState.watchList !== null ? 
          showWatchList() :
          'No Movies Added'
        }
          </div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <Link href="/" className="active">
              My List
            </Link>
          </li>
        </ul>
        <div className="side-nav__divider"></div>
        <ul className="account__main">
          <li>
            <Link href="/" className="">
              Account
            </Link>
          </li>
          <li onClick={signOut}>
            <Link  href="/" className="">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
