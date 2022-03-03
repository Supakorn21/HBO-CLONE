import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const HBOProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);
  const [searchOpen, setSearchOpenAction] = useState(false);

  
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
        setSearchOpenAction
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
