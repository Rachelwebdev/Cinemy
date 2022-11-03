import React, { useEffect, useState } from "react";
import "./Movies.css";
import { Outlet } from "react-router-dom";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const baseImgUrl = "https://image.tmdb.org/t/p/w300";
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
        <h3>Hooked</h3>
        <p className="App-intro">
          You can now watcha few of our favourite movies
        </p>
        <div className="movies">
          {loading && !errorMessage ? (
            <span>Loading ...</span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie) => {
              return (
                <div className="main-movie-card">
                  <img
                    src={`${baseImgUrl}/${movie.backdrop_path}`}
                    alt="movie poster"
                  />
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
