import React from 'react'; // Importing React library

function MovieCard({ movie }) { // Defining a function component called MovieCard that accepts an object containing movie as props
  const { title, description, posterURL, rating } = movie;

  return ( //Defining a div element with a class name of movie-card
    <div className="movie-card">  
      <img src={posterURL} alt={`${title} poster`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p> 
    </div>
  );
}

export default MovieCard;  // Exporting the MovieCard component so that it can be used in other parts of the application
