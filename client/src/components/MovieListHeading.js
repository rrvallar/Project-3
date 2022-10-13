import React from 'react';


//MovieListHeading Function //
const MovieListHeading = (movies) => {
	
	return (
		<div className='col'>
			{movies &&
        		movies.map(movie => (
					<div key={movie._id}>
						<h1>{movie.Title}</h1>
						<div>{movie.Poster}</div>
					</div>
				))}
		</div>
	);
};

//Export MovieListHeading//
export default MovieListHeading;