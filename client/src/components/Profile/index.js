import React from "react";
import SingleMovie from '../SingleMovie'


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
      <h1>Movies Saved</h1>
      <div><SingleMovie/></div>
    
      
      {/* ---- Saved Movie Section End ---- */}
    </section>
  );
}

/// Export Profile Function ///
export default Profile;
