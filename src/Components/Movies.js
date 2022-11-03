import React, { useEffect, useState } from "react";
import "./Movies.css";
import { Outlet } from "react-router-dom";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const baseImgUrl = "https://image.tmdb.org/t/p/w400";
  const url =
    "https://api.themoviedb.org/3/trending/all/week?api_key=5d93bd9c4da320b93c6da0625b0fe34f";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
      setErrorMessage(false);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="movieContainer">
        <h3>Stay Glued on Cinemy!</h3>
        <div className="main-movie-card">
          {loading && !errorMessage ? (
            <span className="loading-text">Loading ...</span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie) => {
              const text = movie.overview;
              return (
                <div className="movies">
                  <img
                    src={`${baseImgUrl}/${movie.backdrop_path}`}
                    alt="movie poster"
                  />
                  <h1 className="movie-title">
                    {movie.original_title || movie.original_name}
                  </h1>
                  <h6 className="overview">
                    {showMore ? text : `${text.substring(0, 100)}`}
                    <button
                      className="btnShow"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "Show Less" : "Show More"}
                    </button>
                  </h6>
                </div>
              );
            })
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Movies;
