import axios from "axios";
import { useState, useEffect } from "react";


const CastInfo = ({ mediaId, mediaType, updateData }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([]);
// 63174
  // This is an api for best movie in 2022
  // /discover/movie?with_genres=28&primary_release_year=2022
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType === 'movie' ? 'movie' : 'tv'}/${mediaId}/credits?api_key=174406b9a949ae4ad6a40666c6a29393&language=en-US`
      )
      .then(function (response) {
        setCredits(response.data);
        setLoadingData(false);
        // handle success
        console.log("success response For Cast and Crew");
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error response For Cast and Crew");
        console.log(error);
      });
  }, [updateData]);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  const showCastPic = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : credits.cast.slice(0,12).map((cast) => {
          return (
            <div className="cast-info__list-showpic-box" key={cast.id}>
              <img className="cast-info__list-showpic-box-img" src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`} alt="" />
              <span className="cast-info__list-showpic-box-name">{cast.name}</span>
            </div>
          );
        });
  };


  const showCast = () => {
    if(loadingData !== true){
      return credits.cast.map((item) => {
        return(
          <ul className="cast-info__crew" key={item.id}>
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        )
      });
    }else{
      return (
        <div>Loading Cast</div>
      )
    }
    
  };
  const showCrew = () => {
    if(loadingData !== true){
      return credits.crew.map((item) => {
        return(
          <ul className="cast-info__crew" key={item.id}>
            <li>{item.job}</li>
            <li>{item.name}</li>
          </ul>
        )
      });
    }else{
      return (
        <div>Loading Crew</div>
      )
    }
    
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast</div>
      <div className="cast-info__list">
        <div className="cast-info__list-showcast">
        {showCast()}
        </div>
        <div className="cast-info__list-showpic">
        {showCastPic()}
        </div>
        
        </div>
      <div className="cast-info__group-title">Crew</div>
      <div className="cast-info__list">
        <div className="cast-info__list-crew">
        {showCrew()}
        </div>
      
      </div>
      
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

export default CastInfo;
