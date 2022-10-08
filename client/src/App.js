import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { useState } from 'react'
import { useEffect } from 'react'
import { setContext } from '@apollo/client/link/context';
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleMovie from './pages/SingleMovie';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import MovieList from "./pages/MovieList"


//establish a new link to the GraphQL server//
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [movies, setMovies] = useState([
  ]);
// Searches for movie request using api //
const getMovieRequest = async() => {
  const url = "http://www.omdbapi.com/?s=pokemon&apikey=3e4e8c6f"
// Fetches response and turns it into json  //
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  // Arrays name is 'Search' for returning movies //
  setMovies(responseJson.Search)
};
// getMovieRequest actual functionality //
useEffect(() =>{
  getMovieRequest();
  // Movie request loads objects of movies inside the [] //
}, []);


  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/movieList"
                element={<MovieList movies={movies} />}
             />
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
             <Route path="/profile">
    <Route path=":username" element={<Profile />} />
    <Route path="" element={<Profile />} />
  </Route>
  <Route
    path="/movie/:id"
    element={<SingleMovie />}
  />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
