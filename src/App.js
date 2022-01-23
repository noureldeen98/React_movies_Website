
import './App.css';
import NavBar from './Components/NavBar/navbar';
import bootstrap from "bootstrap";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListingMovies from './Components/ListingMovies/listingmovies.jsx'
import detailsOfMovie from './Components/MovieDetails/detailsOfMovie'
import Favourites from './Components/Favourite/favourites';
import { useState } from 'react';
import { LoaderProvider } from './contexts/contexts';


function App() {

  const [loader,setLoader]= useState(true)
  return (
    <Router>
      <LoaderProvider value={{loader,setLoader}}>
      <NavBar/>
      <Switch>
        
        <Route path="/Movies" exact component={ListingMovies}></Route>
        <Route path="/detailsOfMovie/:id" exact component={detailsOfMovie}></Route>
        <Route path="/favourites" exact component={Favourites}></Route>
      </Switch>
      </LoaderProvider>
      </Router>
  );
}

export default App;
