import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../../../components/HBOProvider";
import MainLayout from "../../../components/Layouts/MainLayout";
import FeaturedMedia from "../../../components/UI/FeaturedMedia/FeaturedMedia";

import AuthCheck from "../../../components/AuthCheck";
import MediaRow from "../../../components/UI/MediaRow/MediaRow";

import LazyLoad from "react-lazyload";

import PlaceHolders from "../../../components/UI/Placeholders/PlaceHolders";
import GenreNav from "../../../components/UI/GenreNav/GenreNav";
import axios from "axios";
import { shuffleArray } from "../../../components/Utilities";

export default function MediaTypePage({
  mediaData,
  query,
  genresData,
  featuredData,
}) {
  const router = useRouter();

  const globalState = useStateContext();

  console.log(query)

  const showRandomMedia = () => {
    let thumbTypes;
    return genresData.map((item, index) => {
      thumbTypes = shuffleArray(globalState.thumbTypes)[0];
      return (
        <div key={item.id}>
          <LazyLoad
            offset={-200}
            placeholder={<PlaceHolders title={item.name} type={thumbTypes} />}
          >
            <MediaRow
              title={item.name}
              mediaType="movie"
              type={thumbTypes}
              endpoint={`discover/${query.mediaType}?with_genres=${query.genre_id}&sort_by=popularity.desc&primary_release_year=2021&page=${index + 1}`}
            />
          </LazyLoad>
        </div>
      );
    });
  };

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${featuredData.backdrop_path}`}
        title={
          query.mediaType === "movie" ? featuredData.title : featuredData.name
        }
        linkUrl={`/${query.mediaType}/${featuredData.id}`}
        type="single"
      />
      <GenreNav mediaType={query.mediaType} genresData={genresData} />
      {showRandomMedia()}
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2022&with_genres=${context.query.genre_id}&api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`
    );
    console.log("genresData");
    console.log(genresData.data);
  } catch (error) {
    console.log("error");
    console.log(error);
  }
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    }, // will be passed to the page component as props
  };
}
