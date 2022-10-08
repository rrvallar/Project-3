import React from 'react';


// Function component returns list of movies as props/renders div/img poster//
const MovieList = (props) => {
    return (
        <>
        {/* Props for movies  */}
        {props.movies.map((movie, index)=>
        <div className="d-flex justify-content-start -m-3">
            {/* returns movie Poster from api search */}
            <img src={movie.Poster} alt="movie">
            </img>
        </div>)}
        </>
    )
}

export default MovieList;