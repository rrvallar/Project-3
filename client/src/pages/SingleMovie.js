import { useQuery } from '@apollo/client';
import { QUERY_MOVIE } from '../utils/queries';
import React from 'react';
import { useParams } from 'react-router-dom';
// import Auth from '../utils/auth';


const SingleMovie = (props) => {
    const { id: movieId } = useParams();
    

    const { loading, data } = useQuery(QUERY_MOVIE, {
      variables: { id: movieId }
    });
    
    const movie = data?.movie || {};
    console.log(movie)
    
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div>
  <div className="card mb-3">
    <p className="card-header">
      <span style={{ fontWeight: 700 }}>
        {movie.username}
      </span>{' '}
      liked {movie.movieTitle}
    </p>
    <div className="card-body">
      <p>{movie.Poster}</p>
    </div>
  </div>
</div>
  );
};

export default SingleMovie;