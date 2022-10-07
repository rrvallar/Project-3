import React from 'react';
// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';

const SingleMovie = props => {
  const { loading, data } = useQuery(QUERY_MOVIES);

  const movies = data?.movies || {};
  console.log(movies)
  if (loading) {
    return <div>Loading...</div>;
  }
    //Shows movies on page//
    return (
      <div>
      <div className="card mb-3">
        <p className="card-header">
          {loading===false?(movies.map(movie => <div>
            <span style={{ fontWeight: 700 }} className="text-light">
            {movie.username}
          </span>{' '}
          liked on {movie.createdAt}
          <div className="card-body">
          <p>{movie.movieTitle}</p>
        </div>
          </div>)):""}
          
        </p>
        
      </div>
    </div>
    );
  };
export default SingleMovie;