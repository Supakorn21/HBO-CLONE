import React, { useContext, useState } from "react";
import ls from 'local-storage'
export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const HBOProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);
  const [searchOpen, setSearchOpenAction] = useState(false);
  const [watchList, setWatchList] = useState(ls.get('myList'))

  const addToList = (video) => {
    let myList ;
    if(ls('myList') !== null){
      myList = ls.get('myList')
      myList.push(video)
      ls.set('myList', myList)
      setWatchList(myList)
    }else{
      ls.set('myList', [video])
    }
  }

  const removeFromList = (videoId) => {
    let myList = ls('myList')
    myList = myList.filter((item) => item.mediaId !== videoId)
    ls.set('myList', myList)
    setWatchList(myList)
  }



  const thumbTypes = ["large-v", "small-v", "large-h", "small-h"];

  const defaultUserImg =
    "https://userstock.io/data/wp-content/uploads/2020/06/jack-finnigan-rriAI0nhcbc-1024x1024.jpg";

  const createUserAction = (e) => {
    e.preventDefault();
    setUser(e.target.value);
    console.log(user);
  };

  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg,
        sideNavOpen,
        setSideNavOpenAction,
        accountModalOpen,
        setAccountModalOpenAction,
        searchOpen,
        setSearchOpenAction,
        thumbTypes,
        addToList,
        removeFromList,
        watchList
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
