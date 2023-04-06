import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import NewMovieForm from './components/NewMovieForm';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'the vow',
      description: 'Leo et Paige filent le parfait bonheur. Un jour de neige, au retour du cinéma, ils sont victimes d un accident d la route',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelt51zlx5jFfP9TzWZysnUIwxneUJHAclcwp75RnGN5lGvQkC',
      rating: 5,
      trailerURL: '---'
    },
    {
      title: 'El Niño',
      description: 'Le détroit de Gibraltar, qui sépare l Europe de l Afrique est une zone incontournable de commerce fluvial.',
      posterURL: 'https://fr.web.img6.acsta.net/pictures/15/08/05/14/27/311319.jpg',
      rating: 5,
      trailerURL: '---'
    },
    {
      title: '3 mètres au-dessus du ciel',
      description: 'À Barcelone, deux jeunes gens issus de mondes opposés se rencontrent et tombent follement amoureux l un de l autre.',
      posterURL: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSQuU4ngEv0Rk1C4hjFfBPCw5x3fzIk9PyvAcGAZYB0c-d82bPY6MrQ35Sg-tVtLKLV',
      rating: 4,
      trailerURL: '---'
    },
  ]);
  const [filter, setFilter] = useState({});// The state variable movies is initialized using the useState hook to store an array of objects representing the movies.

  const handleFilterChange = (newFilter) => {//The handleAddMovie function is called when a new movie is added to the list using the NewMovieForm component
    setFilter((prevFilter) => ({ ...prevFilter, ...newFilter }));
  };

  const handleAddMovie = (movie) => { //function is called when the filtering criteria changes using the Filter component
    console.log(movie);
    
    setMovies((prevMovies) => [...prevMovies, movie]);//The handleFilterChange function is called when the filtering criteria changes using the Filter component. It merges the new filtering criteria with the previous ones using the spread operator and updates the filter state.
  };

  const filteredMovies = movies.filter((movie) => {
    if (filter.title && !movie.title.toLowerCase().includes(filter.title.toLowerCase())) {
      return false;
    }
    if (filter.rating && movie.rating < filter.rating) {
      return false;
    } // The filteredMovies constant filters the movies array using the filter state. It returns only the movies that match the filtering criteria (if any).
    return true;
  });

  return ( //statement renders the main components of the movie list application
    <div className="app">
      <h1>List The Movies</h1>
      <Filter onFilterChange={handleFilterChange} />
      <NewMovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
