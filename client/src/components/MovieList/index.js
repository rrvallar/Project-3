import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, title }) => {
  if (!movies.length) {
    return <h3>No Movies Yet</h3>;
  }

  return (
    <div>
      <h2>movie list component</h2>
      <h3>{title}</h3>
      {movies &&
        movies.map(movie => (
          <div key={movie._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${movie.username}`}
                style={{ fontWeight: 700 }}
                
              >
                {movie.username}
              </Link>{' '}
              liked on {movie.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/movie/${movie._id}`}>
                <p>{movie.movieTitle}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieList;