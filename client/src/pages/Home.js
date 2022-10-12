import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import MovieListHeading from "../components/MovieListHeading";
import Swipe from "../components/TinderSwipe";

//Random number generated to pick movie from list below//
const numberRandom = Math.floor(Math.random() * 50);

// Start of App function //
const Home = () => {
  // Set movies to empty state //
  const [movies, setMovies] = useState([]);
  
// Start List of possible movies //
  const movieName = [
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Avatar",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2009"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Evil Dead",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1981"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Eternal Sunshine of the Spotless Mind",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2004"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Pinocchio",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1978"
    },
    {
    "Link": "/Images/minari.jpg",
    "Movie_Name": "The Incredibles",
    "Rating": "⭐⭐⭐⭐⭐",
    "Year": "2020"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Toy Story",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1995"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Psycho",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1960"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Alien",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1979"
    },
    {
    "Link": "/Images/joker.jpg",
    "Movie_Name": "Dumbo",
    "Rating": "⭐⭐⭐⭐⭐",
    "Year": "2019"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Snow White and the Seven Dwarves",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1988"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Airplane!",
    "Rating": "⭐⭐⭐",
    "Year": "1980"
    },
    {
    "Link": "/Images/the_father.jpg",
    "Movie_Name": "Ratatouille",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2020"
    },
    {
    "Link": "/Images/god_father.jpg",
    "Movie_Name": "God Father",
    "Rating": "⭐⭐⭐⭐⭐",
    "Year": "1972"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Fight Club",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1999"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "When Harry Met Sally",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1989"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Up",
    "Rating": "⭐⭐⭐",
    "Year": "2003"
    },
    {
    "Link": "/Images/gladiator.jpg",
    "Movie_Name": "101 Dalmatians",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2000"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "The Empire Strikes Back",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1980"
    },
    {
    "Link": "/Images/conjuring.jpg",
    "Movie_Name": "Conjuring",
    "Rating": "⭐⭐⭐",
    "Year": "2013"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "The Lion King",
    "Rating": "⭐⭐⭐",
    "Year": "2019"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "The Jungle Book",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1988"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "ToyStory 2",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1980"
    },
    {
    "Link": "/Images/conjuring.jpg",
    "Movie_Name": "Conjuring",
    "Rating": "⭐⭐⭐",
    "Year": "2013"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Finding Nemo",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2004"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Bambi",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1984"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Coco",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1989"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "The Lady and the Tramp",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1992"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "The Sound of Music",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1965"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Moana",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2006"
    },
    {
    "Link": "/Images/our_friend.jpg",
    "Movie_Name": "The Princess and the Frog",
    "Rating": "⭐⭐⭐",
    "Year": "2019"
    },
    {
    "Link": "/Images/the_secret_garden.jpg",
    "Movie_Name": "The Secret Garden",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2020"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Enchanted",
    "Rating": "⭐⭐⭐",
    "Year": "1973"
    },
    {
    "Link": "/Images/nun.jpg",
    "Movie_Name": "Tangled",
    "Rating": "⭐⭐⭐",
    "Year": "2018"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Some Like It Hot",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1959"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "The Lord of the Rings: The Return of the King",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2003"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Peter Pan",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1995"
    },
    {
    "Link": "/Images/titanic.jpg",
    "Movie_Name": "Titanic",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1997"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Aladdin",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2016"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Frozen",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1963"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Zootopia",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1993"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Encanto",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1995"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "The Parent Trap",
    "Rating": "⭐⭐⭐",
    "Year": "1980"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Raya and the Last Dragon",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1989"
    },
    {
    "Link": "/Images/tom_and_jerry.jpg",
    "Movie_Name": "Tom & Jerry",
    "Rating": "⭐⭐",
    "Year": "2021"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Big Hero 6",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2003"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Up",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2009"
    },
    {
    "Link": "/Images/gladiator.jpg",
    "Movie_Name": "Alice in Wonderland",
    "Rating": "⭐⭐⭐⭐",
    "Year": "2000"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Fantasia",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1969"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "The Princess Bride",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1987"
    },
    {
    "Link": "/Images/ironman.jpg",
    "Movie_Name": "Honey, I Shrunk The Kids",
    "Rating": "⭐⭐⭐⭐",
    "Year": "1976"
    }
    ]
// End List of possible movies //

//Function to take Movie_Name from list and pit it into API //
  const getMovieRequest = async (searchValue) => {
    movieName.forEach((el, index) => {});
    const url = `http://www.omdbapi.com/?s=${movieName[numberRandom].Movie_Name}&apikey=263d22d8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    // Response is put into JSON format, sliced to only show first movie //
    if (responseJson.Search) {
      console.log(responseJson.Search)
      setMovies(responseJson.Search.slice(0, 1));
    }
  };
// Runs function about with inputed api info //
  useEffect(() => {
    getMovieRequest(movieName[numberRandom].Movie_Name);
    
  }, []);

  

// Return the generated info onto the page //
  return (
    <div className="container movie-app ">
      <div className="row d-flex align-items-center mt-4 mb-4">
        {/* Header Text */}
        <MovieListHeading heading="MovieSwipe" />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Swipe shows movie poster on page*/}
        <Swipe movies={movies} />
      </div>
    </div>
  );
};

export default Home;
