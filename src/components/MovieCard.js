import React from 'react'; // Importing React library
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MovieCard(props) { // Defining a function component called MovieCard that accepts an object containing movie as props

  console.log(props)
  let { state } = useLocation();
  const { title, description, posterURL, rating, trailerURL } = state.movie;

  return ( //Defining a div element with a class name of movie-card
    <div>
      <div><Link to="/">Return</Link></div> 
      <div className="movie-card">  
        <img src={posterURL} alt={`${title} poster`} />
        <h2>{title}</h2> 
        <p>{description}</p>
        <p>Rating: {rating}</p> 
        <a href="trailerURL">{trailerURL}</a>
      </div>
    </div>
  ); // Overall, this JSX markup creates a card-like display for a movie, with the movie poster, title, description, rating, and trailer link
}

export default MovieCard;  // Exporting the MovieCard component so that it can be used in other parts of the application
