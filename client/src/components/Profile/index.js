import React from "react";
import MovieProfile from '../MovieProfile';

// --- Function for rendering Profile components --- //
function Profile() {
  return (
    // All html will be rendered for profile component //
    <section>
      {/* ---- Profile Section Start ---- */}
      <h1>Profile:</h1>
      <div>Avatar?</div>
      {/* ---- Profile Section End ---- */}
      {/* ---- Saved Movie Section Start ---- */}
      <MovieProfile/>
      {/* ---- Saved Movie Section End ---- */}
    </section>
  );
}

/// Export Profile Function ///
export default Profile;
