import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieCard from './components/MovieCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:movieName",
    element: <MovieCard />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root')); //This code uses ReactDOM.createRoot to create a root element for the React application, which is the DOM element with an id of root. The createRoot method creates a new root-level renderer for React, which is optimized for concurrent rendering
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); // this code initializes the root-level renderer for the React application and renders the RouterProvider component with the router prop

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
