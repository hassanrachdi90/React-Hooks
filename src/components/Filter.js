import React from 'react'; // Importing React library

function Filter({ onFilterChange }) { // Defining a function component called Filter that accepts an object containing onFilterChange function as props
  const handleTitleChange = (event) => {// Defining a function called handleTitleChange
    onFilterChange({ title: event.target.value });// Calling onFilterChange function with an object containing title property set to input value
  };

  const handleRatingChange = (event) => { // Defining a function called handleRatingChange
    onFilterChange({ rating: event.target.value });// Calling onFilterChange function with an object containing rating property set to input value
  };

  return ( // Returning JSX element
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <input style={{ marginRight: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} type="text" placeholder="Title" onChange={handleTitleChange} />
      <input style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} type="number" placeholder="Rating" min="1" max="5" onChange={handleRatingChange} />
    </div>
  );
}

export default Filter;
