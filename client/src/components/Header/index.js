import React from 'react';
import Nav from '../Nav';
import MovieListHeading from "../../components/MovieListHeading";

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <div className="row d-flex align-items-center mt-4 mb-4">
        {/* Header Text */}
        <MovieListHeading heading="MovieSwipe" />
      </div>
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
