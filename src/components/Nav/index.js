import React from "react";

// Nav Function Start ///
function Nav({ handleClick }) {
  return (
    <header>
      <nav>
        <ul className="flex-row">
         {/* ----------Profile navbar section start------------------ */}
          <li className="mx-2">
            <span data-testid="Profile" onClick={() => handleClick("Profile")}>
              <h3>Profile</h3>
            </span>
          </li>
           {/* ----------- Browse navbar section start --------------- */}
          <li className="mx-2">
            <span data-testid="Browse" onClick={() => handleClick("Browse")}>
              <h3>Browse</h3>
            </span>
          </li>
           {/* ------------------ Landing navbar section start -------------- */}
          <li className="mx-2">
            <span data-testid="Landing" onClick={() => handleClick("Landing")}>
              <h3>Landing</h3>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// ---Exports Nav--- //
export default Nav;
