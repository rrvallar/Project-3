import React from 'react';
import MovieList from '../components/MovieList';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES, QUERY_ME_BASIC } from '../utils/queries';



const MovieListPage = () => {
    const { loading, data } = useQuery(QUERY_MOVIES);
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
  const movies = data?.movies || [];
  console.log(movies)
  

  return (
    <main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MovieList movies={movies} title="Some Movies Recently Favorited By Users:" />
      )}
    </div>
  </div>
</main>
  );
};

export default MovieListPage;