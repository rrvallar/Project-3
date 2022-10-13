import React from 'react';


const MovieList = ({ movies, title }) => {
  // console.log(movies, title)
  return (
    <div>
      <h2>{title}</h2>
      {movies &&
        movies.map(movie => (
          <div key={movie.movieTitle} className="card mb-3">
            <div className="card-body">
              <p>{movie.movieTitle}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieList;