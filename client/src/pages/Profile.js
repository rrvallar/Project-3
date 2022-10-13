import React from 'react';
// import MovieList from '../components/MovieList/index'
import { QUERY_ME } from '../utils/queries'
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },

  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;

  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  };



  return (
    <div>
      <div className="flex-row mb-3 prof-movies">
        <h5 className="bg-dark text-secondary p-3 display-inline-block">
          {user.username}


        </h5>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="flex-row justify-space-between mb-3">
          <div className="col-12 mb-3 col-lg-12">
            {/* <MovieList
            movies={user.savedMovie}
            title={`${user.email}'s thoughts...`}
          />
           {user.movieTitle} */}
            {user.savedMovie.map((movie) =>
              <li key={movie.movieTitle} className="profileMovies">
                {movie.movieTitle}
              </li>)}
          </div>
          <div className="col-12 mb-3 col-lg-8">

          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;