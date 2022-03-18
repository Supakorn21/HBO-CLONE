import AuthCheck from "../../components/AuthCheck";
import MainLayout from "../../components/Layouts/MainLayout";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";

import MediaRow from "../../components/UI/MediaRow/MediaRow";

import LazyLoad from "react-lazyload";

import PlaceHolders from "../../components/UI/Placeholders/PlaceHolders";

import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleMediaPage
({ query , mediaData }) {
  // const [mediaData, setMediaData] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  console.log(query);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${query.id}?&api_key=174406b9a949ae4ad6a40666c6a29393&language=en-US`
  //     )
  //     .then(function (response) {
  //       setMediaData(response.data);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log("Error response For ");
  //       console.log(error);
  //     });
  // }, [mediaData]);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={query.mediaType === "movie" ? mediaData.title : mediaData.name}
        mediaUrl={`https://image.tmdb.org/t/p/original${mediaData.backdrop_path}`}
        location="In theaters and on HBO MAX. Streaming throughout March 3."
        linkUrl="/movie/id"
        type="single"
      />
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Similar To this"
          type="small-v"
          mediaType={query.mediaType}
          endpoint={`${query.mediaType === 'movie' ? 'movie' : 'tv' }/${query.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaId={query.id} mediaType={query.mediaType} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let mediaData;
  try {
    mediaData = await axios.get(
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?&api_key=174406b9a949ae4ad6a40666c6a29393&language=en-US`
    );
  } catch (err) {
    console.log(err);
  }

  return {
    props: { mediaData: mediaData.data, query: context.query }, // will be passed to the page component as props
  };
}
