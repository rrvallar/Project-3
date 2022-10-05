/// Import React useState  ///
import React, { useState } from "react";

///Import of component files///
import Profile from './components/Profile'
import Nav from './components/Nav'
import Browse from './components/Browse'
import Landing from './components/Landing'

///Function 'App' takes current page by ID and renders it to page depending on navbar choice///
function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "Browse") {
      return <Browse />;
    }
    if (currentPage === "Landing") {
      return <Landing/>;
    }
  };

  /// Sets page to be rendered with html ///
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    /// Html that is rendered on the bage ///
    <div className="back">
      {/* ----- actual navbar ----- */}
      <Nav currentPage={currentPage} handleClick={handlePageChange}></Nav>
      {/* --- Main = where components are rendered on page --- */}
      <main id="Main">{renderPage()}</main>
    </div>
  );
}

export default App;
