import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
// import MovieList from '../components/MovieList';
// import Auth from '../utils/auth';

const Profile = () => {
  const { username: userName } = useParams();
  // const movies = useQuery( QUERY_ME, {
  //   variables: { username: userParam },
  // });

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userName },
  });

  // const { movies } = useQuery(QUERY_MOVIES)

  const user = data?.me || {};

  console.log(user)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex-row mb-3 prof-movies">
        <h5 className="bg-dark text-secondary p-3 display-inline-block">
          {/* Viewing <usernames>'s profile. */}
          Viewing {userName ? `${user.username}'s` : 'your'} movies.
        </h5>
      </div>
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">

          <div>
                {/* <MovieList movies={user.savedMovie}></MovieList> */}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;
