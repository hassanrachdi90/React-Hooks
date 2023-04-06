import React from 'react';// Importing React library
import { Link } from 'react-router-dom';

function MovieList({ movies }) { // Defining a function component called MovieList that accepts an object containing movies as props
  return (
    <div className="movie-list">
    
      {movies?.map((movie) => ( // Using the map() function to iterate over each movie object in the movies array and returning a MovieCard component for each movie        
        <Link key={movie.title}
          to={movie.title} 
          state= {{ movie }}        >
          <div className="movie-card">  
            <img src={movie.posterURL} alt={`${movie.title} poster`} />
            <h2>{movie.title}</h2>
            <p>Rating: {movie.rating}</p> 
    </div>
        </Link>
      ))}
    </div>
  );
} //The first div element contains two child elements: a Link component that links back to the homepage ("/"), and a div element with a class name of "movie-card".

export default MovieList; // Exporting the MovieList component so that it can be used in other parts of the application
