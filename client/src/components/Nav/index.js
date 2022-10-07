import React from "react";

// Nav Function Start ///
function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex-row">
          {/* ----------Profile navbar section start------------------ */}
          <li className="mx-2 "><a href="./">Profile</a></li>
          {/* ----------- Browse navbar section start --------------- */}
          <li className="mx-2"><a href="./">Home</a></li>
          {/* ------------------ Landing navbar section start -------------- */}
          {/* <li className="mx-2 navLink">
              Home
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

// ---Exports Nav--- //
export default Nav;
