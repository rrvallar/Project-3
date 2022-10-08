import React from 'react';
import MovieListHeading from '../components/MovieListHeading/MovieListHeading'
import SearchBox from '../components/SearchBox/SearchBox';
import { useState, useEffect } from 'react'


// Function component returns list of movies as props/renders div/img poster//
const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
// Searches for movie request using api //
const getMovieRequest = async() => {
  const url = "http://www.omdbapi.com/?s=pokemon&apikey=3e4e8c6f"
// Fetches response and turns it into json  //
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  // Arrays name is 'Search' for returning movies //
  setMovies(responseJson.Search)
};
// getMovieRequest actual functionality //
useEffect(() =>{
  getMovieRequest();
  // Movie request loads objects of movies inside the [] //
}, []);
    return (
      <>
      <MovieListHeading heading="Movies"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="row">
      <div className="row">
         {/* Props for movies  */}
         {props.movies.map((movie, index)=>
        <div className="d-flex justify-content-start -m-3">
            {/* returns movie Poster from api search */}
            <img src={movie.Poster} alt="movie">
            </img>
        </div>)}
      </div>
      </div>
      
       
        </>
    )
}

export default MovieList;

