import React from 'react';// Importing React library
import MovieCard from './MovieCard'; // Importing the MovieCard component from the './MovieCard' module

function MovieList({ movies }) { // Defining a function component called MovieList that accepts an object containing movies as props
  return (
    <div className="movie-list">
      {movies?.map((movie) => ( // Using the map() function to iterate over each movie object in the movies array and returning a MovieCard component for each movie
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList; // Exporting the MovieList component so that it can be used in other parts of the application
