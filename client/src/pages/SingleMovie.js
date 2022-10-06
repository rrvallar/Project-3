import React from 'react';

const SingleMovie = props => {
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
