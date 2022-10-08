import React from 'react';
import MovieListHeading from '../components/MovieListHeading/MovieListHeading'
import SearchBox from '../components/SearchBox/SearchBox';


// Function component returns list of movies as props/renders div/img poster//
const MovieList = (props) => {
    return (
      <>
      <MovieListHeading heading="Movies"/>
      <SearchBox/>
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

