import React from 'react';
import { CardSwiper } from "react-card-rotate-swiper"; 

const MovieList = ({ movies, title }) => {

  // const [index, setIndex] = useState(0);

    // const current = movies[index];

  if (!movies.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  const handleSwipe = (swipe) => {
    // setIndex(index + 1);
    if (swipe === 'left') {
      console.log("Not Interested")
    } else {
      console.log('Lets Watch')
    };
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
                <div key={movie._id} className="card mb-3">
                  <div className="card-body">
                    <p>{movie.movieTitle}</p>
                  </div>
                </div>
            }/>
        ))}
    </div>
  );
};

export default MovieList;