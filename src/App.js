import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './pages/Home/home';
import MovieList from './component/movielist/movielist';
import Movie from './pages/movieDeatils/movie';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>  
          <Route path="movies/:type" element={ <MovieList/>}></Route>  
          <Route path="/*" element={<h1>Eror Page</h1>}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
