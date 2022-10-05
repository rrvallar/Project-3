import React from "react";

// --- Function for rendering landing components --- //
function Landing() {
  return (
    // All html will be rendered for Landing component //
    <section>
      {/* ------------------ Sign Up Form Start -------------- */}
      <h2 class="text-center varela-font">Sign Up</h2>
      <form id="contact-form  ">
        <div class="borderBoxContact">
          <div class="p-2 bd-highlight  justify-content-center">
            <label htmlFor="name">
              <h4>Username:</h4>
            </label>
            <input type="text" name="name" />
          </div>
          <div class="p-2 bd-highlight  ">
            <label htmlFor="email">
              <h4>Email:</h4>
            </label>
            <input type="text" name="email" />
          </div>
          <div class="p-2 bd-highlight  ">
            <label htmlFor="email">
              <h4>Password</h4>
            </label>
            <input type="text" name="email" />
          </div>
          <button class="btn btn-outline-info mt-4 " type="submit">
            <h3>Submit</h3>
          </button>
        </div>
      </form>
      {/* ------------------ Sign Up Form End -------------- */}
      {/* ------------------ Log In Form Start -------------- */}
      <h2 class="text-center varela-font">Login</h2>
      <form id="contact-form  ">
        <div class="borderBoxContact">
          <div class="p-2 bd-highlight  justify-content-center">
            <label htmlFor="name">
              <h4>Username:</h4>
            </label>
            <input type="text" name="name" />
          </div>
          <div class="p-2 bd-highlight  ">
            <label htmlFor="email">
              <h4>Email:</h4>
            </label>
            <input type="text" name="email" />
          </div>

          <button class="btn btn-outline-info mt-4 " type="submit">
            <h3>Submit</h3>
          </button>
        </div>
      </form>
      {/* ------------------ Log In Form End -------------- */}
    </section>
  );
}

/// Export Landing Function ///
export default Landing;
