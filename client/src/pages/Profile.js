import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';

const Profile = () => {

  const { loading, data } = useQuery(QUERY_MOVIES);
  const movies = data?.movies || [];
console.log(movies);

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          {/* Viewing <usernames>'s profile. */}
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
      <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>

        <div className="col-12 col-lg-3 mb-3">{/* PRINT FRIEND LIST */}</div>
      </div>
    </div>
  );
};

export default Profile;
