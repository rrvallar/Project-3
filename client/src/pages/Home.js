import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';
import MovieList from '../components/MovieList';

//Home Page//
const Home = () => {
  // use useQuery hook to make query request//
  const { loading, data } = useQuery(QUERY_MOVIES);
  //get the movie data out of the query's response//
  const movies = data?.movies || [];
console.log(movies);

  return (
    <main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MovieList movies={movies} title="Some Feed for Thought(s)..." />
      )}
    </div>
  </div>
</main>
  );
};

export default Home;
