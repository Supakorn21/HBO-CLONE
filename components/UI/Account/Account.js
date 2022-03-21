import Link from "next/link";
import { useStateContext } from "../../HBOProvider";
import { useClickOutSide } from "../../Hooks/useClickOutSide";
import {useEffect} from 'react'

const Account = (props) => {
  const globalState = useStateContext();

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


  return (
    <div
      className={`account ${
        globalState.accountModalOpen ? "account--active" : ""
      }`}
    >
      <div className="account__details ">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          <div className="account__watch-video">
            <img src="https://www.slashfilm.com/img/gallery/heres-when-the-batman-will-begin-streaming-on-hbo-max/l-intro-1640632402.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play"></i>
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>
          </div>
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
          <li>
            <Link href="/" className="">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
