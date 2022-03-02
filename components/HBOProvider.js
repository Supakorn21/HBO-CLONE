import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const HBOProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const defaultUserImg =
    "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg";

  const createUserAction = (e) => {
    e.preventDefault();
    setUser(e.target.value);
    console.log(user);
  };

  return (
    <StateContext.Provider value={{ user, createUserAction, defaultUserImg }}>
      {children}
    </StateContext.Provider>
  );
};
