import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";

import AuthCheck from "../components/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";

import LazyLoad from "react-lazyload";

import PlaceHolders from "../components/UI/Placeholders/PlaceHolders";

export default function Home() {
  const router = useRouter();

  const globalState = useStateContext();

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1&start=16&mute=1&loop=1"
        title="THE BATMAN"
        location="In theaters and on HBO MAX. Streaming throughout March 3."
        linkUrl="/movie/414906"
        type="front"
        mediaId={414906}
        mediaType={"movie"}
      />
      <LazyLoad
        offset={-100}
        placeholder={<PlaceHolders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          mediaType="movie"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-100}
        placeholder={<PlaceHolders title="Series" type="small-v" />}
      >
        <MediaRow
          title="Series"
          mediaType="tv"
          type="small-v"
          endpoint="discover/tv?sort_by=popularity.desc&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-100}
        placeholder={<PlaceHolders title="Action" type="small-v" />}
      >
        <MediaRow
          title="Action"
          mediaType="movie"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-100}
        placeholder={<PlaceHolders title="Horror" type="large-v" />}
      >
        <MediaRow
          title="Horror"
          type="large-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        placeholder={
          <PlaceHolders title="Animations" type="large-h" offset={-100} />
        }
      >
        <MediaRow
          title="Animations"
          type="large-h"
          endpoint="discover/movie?with_genres=16&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-100}
        placeholder={<PlaceHolders title="SciFi" type="small-v" />}
      >
        <MediaRow
          title="SciFi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2022"
        />
      </LazyLoad>
    </MainLayout>
  );
}
