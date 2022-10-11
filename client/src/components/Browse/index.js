import React from 'react';
import { CardSwiper } from "react-card-rotate-swiper"; 
import { ADD_MOVIE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const MovieSwiper = ({ movies, title }) => {

  const [addMovie] = useMutation(ADD_MOVIE);

  if (!movies.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  const handleSwipe = async (movie) => {
    try {
      await addMovie({
        variables: { id: movie._id },
      });
    } catch (e) {
      console.error(e);
    }
    // if (swipe === 'right') {
    //   console.log(true)
    // } else {
    //   console.log(false)
    // };
  };

  return (
    <div>
      <h3>{title}</h3>
      {movies &&
        movies.map(movie => (
          <CardSwiper
          onSwipe={handleSwipe}
          className={"swiper"}
          contents={
                <div key={movie._id} className="movie-card card mb-3">
                  <div className="card-body">
                    <p>{movie.movieTitle}</p>
                  </div>
                </div>
            }/>
        ))}
    </div>
  );
};

export default MovieSwiper;