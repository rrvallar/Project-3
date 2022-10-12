import React, { useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";

// 'Simple Function' reloads page on swipe //
const Swipe = (props) => {
  function refreshPage() {
    window.location.reload(false);
  }

 
  // const [lastDirection, setLastDirection] = useState();

    const Swiped = (direction, nameToDelete) => {
      // console.log("removing: " + nameToDelete);
      // setLastDirection(direction);
      // Right Direction Swipe -- Add function to capture into db //
      if (direction === "right"){
        console.log("it right")
        // Sets swipe time //
        setInterval(refreshPage(), 3000);
      }
      // Left Direction Swipe -- Add function to capture into db //
      else if (direction === "left"){
        console.log("it left")
        // Sets swipe time //
        setInterval(refreshPage(), 3000);
      }
    };
    
    

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
      
      {/* Poster Image Start */}
      <div className="cardContainer">
        {props.movies.map((movie) => (
          <TinderCard
            className="swipe"
            key={movie.Title}
            onSwipe={Swiped }
            onCardLeftScreen={() => outOfFrame(movie.Title)}
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
            {movie.Title}
          </TinderCard>
        ))}
      </div>
      {/* Poster Image End */}
    </div>
  );
};

export default Swipe;
