import React, { useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";

// 'Simple Function' reloads page on swipe //
const Swipe = (props) => {
  function refreshPage() {
    window.location.reload(false);
  }

  const [lastDirection, setLastDirection] = useState();

  //   const Swiped = (direction, nameToDelete) => {
  //     console.log("removing: " + nameToDelete);
  //     setLastDirection(direction);
  //     console.log(direction);
  //   };

  // console logs the name of movie and direction it went //
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  //Movie Swiper Card  Start//
  return (
    <div>
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
      <h1>
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
        If you'd watch it or if you wouldn't
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
      {/* Poster Image Start */}
      <div className="cardContainer">
        {props.movies.map((movie) => (
          <TinderCard
            className="swipe"
            key={movie.Title}
            onSwipe={refreshPage}
            onCardLeftScreen={() => outOfFrame(movie.title)}
          >
            {/* inline styling in div for poster */}
            <div
              style={{
                backgroundImage: "url(" + movie.Poster + ")", 
                width: "400px",
                height: "500px",
                backgroundSize: "cover",

              }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </div>
      {/* Poster Image End */}
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
};

export default Swipe;