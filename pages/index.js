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
      <MediaRow
        title="Movies"
        type="large-v"
        endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2022"
      />
      <MediaRow
        title="Series"
        type="small-v"
        endpoint="discover/tv?sort_by=popularity.desc&primary_release_year=2022"
      />
      <MediaRow
        title="Action"
        type="small-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2022"
      />
      <MediaRow
        title="Horror"
        type="large-v"
        endpoint="discover/movie?with_genres=27&primary_release_year=2022"
      />
      <MediaRow
        title="Animations"
        type="large-h"
        endpoint="discover/movie?with_genres=16&primary_release_year=2022"
      />
      <MediaRow
        title="SciFi"
        type="small-v"
        endpoint="discover/movie?with_genres=878&primary_release_year=2022"
      />
    </MainLayout>
  );
}
