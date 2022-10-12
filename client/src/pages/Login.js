import React, { useState } from 'react';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

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

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card bg-tertiary'>
          <h5 className='mx-4'>Login</h5>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
          </div>
          <p>Don't have an account?<br></br><a href='./Signup'>Signup Instead</a></p>
        </div>
      </div>
    </main>
  );
};

export default Login;
