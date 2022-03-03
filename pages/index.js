import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";

import AuthCheck from "../components/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";

export default function Home() {
  const router = useRouter();

  const globalState = useStateContext();

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Movies" type="large-v"/>
      <MediaRow title="Series" type="small-h"/>
      <MediaRow title="Action" type="small-v"/>
      <MediaRow title="Horror" type="small-v"/>
      <MediaRow title="SciFi" type="small-v"  />
    </MainLayout>
  );
}
