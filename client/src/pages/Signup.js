import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

import auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  // addUser using the mutation
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // TODO mutation
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      // call Auth here to pass in the token and verify the token
      auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
<<<<<<< HEAD
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card bg-secondary'>
          <h5 className='mx-4'>Sign Up</h5>
          <div className='card-body'>
=======
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h5 className="mx-4">Sign Up</h5>
          <div className="card-body">
>>>>>>> e3c5344fad1d0c265ec12df43949d93b129dd8fc
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />

              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
<<<<<<< HEAD
              <button type='submit'>
=======
              <button className="btn d-block w-100" type="submit">
>>>>>>> e3c5344fad1d0c265ec12df43949d93b129dd8fc
                Submit
              </button>
            </form>
          </div>
          <div className="login-link">
            <p>
              Have an account?<br></br>
              <a href="./Login">Login Here</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
