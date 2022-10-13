import React from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
// import { QUERY_ME } from '../utils/queries';
import { ADD_MOVIE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
// import { useParams } from 'react-router-dom';

// 'Simple Function' reloads page on swipe //
const Swipe = (props) => {
  
  const [addMovie] = useMutation(ADD_MOVIE)

  // const onCardLeftScreen = (direction) => {
  //   console.log(direction)
  //   if (direction === 'right') {
  //     handleSwipe()
  //   } else if (direction === 'left') {
  //     console.log("Not today!")
  //     window.location.reload(false);
  //   }
  // }

  const handleSwipe = async ( dir, movie) => {
    if (dir === 'right') {
      try {
        await addMovie({
          variables: { movieTitle: movie },
        });
      } catch (e) {
        console.error(e);
      }
      window.location.reload(false);
    } else 
      console.log(dir);
      window.location.reload(false);
  };

  //Movie Swiper Card  Start//
  return (
    <div className="movieSwiper">
      <p className="instructions">Swipe right to save a movie to your library or swipe left to ignore it.</p>
        {/* Links for Swipe Card Start */}
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      {/* Links for Swipe Card Start */}
      {/* Heading of Swipe Cards "watch or wouldnt" Start */}
      <div className="swipeHeader">
        <h1 className="ignore">
          {/* Arrow Icon pointing left Start */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-box-arrow-in-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
          {/* Arrow icon pointing left end*/}
          {/* Heading Text Over Cards: */}
          Maybe Later
        </h1>
        <h1 className="watch">
        Let's Watch!
          {/* Arrow Pointing Left Start */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          {/* Arrow Pointing Left End */}
        </h1>
      </div>
      {/* Poster Image Start */}
      <div className="cardContainer">
        {props.movies.map((movie) => (
          <TinderCard
            className="swipe"
            key={movie.Title}
            // onCardLeftScreen={onCardLeftScreen}
            onSwipe={ (dir) => handleSwipe(dir, movie.Title) }
            // preventSwipe={['up', 'down']}
          >
            {/* inline styling in div for poster */}
            <div
              style={{
                backgroundImage: "url(" + movie.Poster + ")", 
                width: "400px",
                height: "550px",
                backgroundSize: "cover",
                margin: "auto"
              }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </div>
      {/* Poster Image End */}
    </div>
  );
};

export default Swipe;