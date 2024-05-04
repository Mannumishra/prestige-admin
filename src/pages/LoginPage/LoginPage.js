import React, { useState } from 'react';
import './LoginPage.css';
import logo from  './logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password match the hardcoded credentials
    if (email === 'admin@gmail.com' && password === '1') {
      // If credentials match, redirect to admin dashboard
      const login = true;
      sessionStorage.setItem('login', login);
  
      // Redirect to admin dashboard
      window.location.href = '/admin/dashboard';
    } else {
      // If credentials don't match, display an error message
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className="row user-login mx-1">
        <div className="col-md-12 text-center">
          <img src="https://catalog.wlimg.com/1/2990960/other-images/12569-comp-image.png" height="150" style={{objectFit:'contain'}} alt="company-logo" />
        </div>
        <div className="col-12 text-center">
          <form onSubmit={handleSubmit}>
            <div className="single-field">
              <label htmlFor="user-email">Email Address</label>
              <div>
                <i className="fa-regular fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Username@gmail.com"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  id="user-email"
                />
              </div>
            </div>
            <div className="single-field">
              <label htmlFor="user-password">Password</label>
              <div>
                <i className="fa-solid fa-unlock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  id="user-password"
                />
              </div>
            </div>
            <div className="error-message">{error}</div>
            <div>
              <input type="submit" className="login-submit-btn" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
