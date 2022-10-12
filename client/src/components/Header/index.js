import React from 'react';
import Nav from '../Nav';

const Header = () => {
  return (
    <header className="bg-tertiary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Movie Swipe</h1>
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
