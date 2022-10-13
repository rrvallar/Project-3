import React from 'react';
// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';
// import MovieListHeading from '../components/MovieListHeading';

const Profile = () => {
  const { data } = useQuery(QUERY_MOVIES);
  // console.log(data);
  const movies = data?.movies || [];
  console.log(movies)

  return (
    <div>
      <div className="flex-row mb-3 prof-movies">
        <h5 className="bg-dark text-secondary p-3 display-inline-block">
          {/* Viewing <usernames>'s profile. */}
          Your Movies
        </h5>
      </div>
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <div>
            {/* <MovieListHeading movies={movies}></MovieListHeading> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
