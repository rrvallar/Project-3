import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIE } from '../utils/queries';

const SingleMovie = props => {
  console.log(props)
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{' '}
          Picked Movie On:
        </p>
        <div className="card-body">
          <p>Movie Choice</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
