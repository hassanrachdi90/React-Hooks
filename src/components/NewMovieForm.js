import React, { useState } from 'react'; // Importing React library and useState hook

const NewMovieForm = ({ onAddMovie }) => { // Defining a function component called NewMovieForm that accepts onAddMovie as a prop
  const [title, setTitle] = useState(''); // Initializing a state variable for title and setting its initial value to an empty string
  const [description, setDescription] = useState('');// Initializing a state variable for description and setting its initial value to an empty string
  const [posterURL, setPosterURL] = useState('');// Initializing a state variable for posterURL and setting its initial value to an empty string
  const [rating, setRating] = useState('');// Initializing a state variable for rating and setting its initial value to an empty string
  const [trailerURL, setTrailerURL] = useState('');

  const handleSubmit = (event) => { // Defining a function called handleSubmit to handle form submission
    event.preventDefault(); // Preventing the default form submission behavior
    onAddMovie({ title, description, posterURL, rating });// Calling the onAddMovie function passed as a prop and passing the movie information as an object
    setTitle('');// Resetting the title state variable to an empty string
    setDescription('');// Resetting the description state variable to an empty string
    setPosterURL('');// Resetting the posterURL state variable to an empty string
    setRating('');// Resetting the rating state variable to an empty string
    setTrailerURL('');//Setting the trailerURL state to an empty string will cause the input field for the trailer URL to be cleared, since the value of the input field is bound to the trailerURL state variable.
  };

  return (
    <form className="new-movie-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <label htmlFor="posterURL">Poster URL:</label>
      <input
        type="url"
        id="posterURL"
        value={posterURL}
        onChange={(event) => setPosterURL(event.target.value)}
        required
      />

      <label htmlFor="trailerURL">Trailer URL:</label>
      <input
        type="url"
        id="trailerURL"
        value={trailerURL}
        onChange={(event) => setTrailerURL(event.target.value)}
        required
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        min="1"
        max="5"
        required
      />

      <button type="submit">Add Movie</button>
    </form>
  );
  
};

export default NewMovieForm; // Exporting the NewMovieForm component so that it can be used in other parts of the application
