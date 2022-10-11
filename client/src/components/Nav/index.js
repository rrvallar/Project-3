import React from "react";

// Nav Function Start ///
function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex-row">
          {/* ----------- Browse navbar section start --------------- */}
          <li className="mx-2"><a href="/">Home</a></li>
          {/* ----------Profile navbar section start------------------ */}
          <li className="mx-2 "><a href="/profile">Profile</a></li>
          {/* ----------Login navbar section start------------------ */}
          <li className="mx-2 "><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

// ---Exports Nav--- //
export default Nav;
