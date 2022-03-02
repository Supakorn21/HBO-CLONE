import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import Login from "../components/UI/Login/Login";

export default function Home() {


  const router = useRouter()

  const globalState = useStateContext();


  useEffect(() => {
    const loggedIn = false;
    if(loggedIn === false){
        router.push('/create')
    }
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
