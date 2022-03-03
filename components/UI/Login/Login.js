import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import localStorage from "local-storage";
import { useMounted } from "../../Hooks/useMounted";

const Login = () => {
  const [loadingUsers, setLoadingUsers] = useState(false);

  const globalState = useStateContext();
  const router = useRouter();

  const users = localStorage("users") !== null ? localStorage("users") : [];
  const { hasMounted } = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
    console.log("load Effect", users);
  }, []);

  console.log("declared users", users);
  
  const selectUser = (id) => {
    
    localStorage("activeUID", id);
    router.push("/");
  };

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div onClick={()=>selectUser(user.id)} className="login-user__user-box" key={user.id}>
            <img
              src="https://userstock.io/data/wp-content/uploads/2020/06/jack-finnigan-rriAI0nhcbc-1024x1024.jpg"
              className="login-user__user-img"
            />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  };

  const createUser = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">Who is Watching?</span>
        </div>

        <div className="login-user__form">{hasMounted ? showUsers() : ""}</div>

        <div className="login-user__buttons">
          <button onClick={createUser} className="login-user__kid">
            Create User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
