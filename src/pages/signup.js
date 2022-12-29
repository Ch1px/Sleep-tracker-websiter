
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';

import { Button, Divider, Input } from 'antd';


/*function createUser(email, username, password) {
  // Create a new Parse.User object
  const user = new Parse.User();
  user.set("email", email);
  user.set("username", username);
  user.set("password", password);

  // Save the user to the Parse database
  user.signUp().then(
    function(user) {
      // Sign up was successful
      console.log("Successfully created user:", user);
      alert(`Success! User ${username} was successfully created!`);
      return true;
    },
    function(error) {
      // Sign up failed, display an error message
      console.error("Error creating user:", error);
      alert(`Error! ${error}`);
      return false;
    }
  );
} */

const SignUp = () => {
  const navigate = useNavigate();
  // State variables
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));
    //localStorage.setItem("user", JSON.stringify(confirmPassword));
    navigate("/log-in")
  };

  return (
    <div>
      <div className="container">
        <h2 className="heading">{'User Registration'}</h2>
        <Divider />
        <div className="form_wrapper">
        <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            size="large"
			      type="text"
            className="form_input"
          />
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Create Username"
            size="large"
			      type="text"
            className="form_input"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password"
            size="large"
            type="password"
            className="form_input"
          />
        </div>
        <div className="form_buttons">
          <Button
            onClick={() => handleSubmit()}
            type="primary"
            className="form_button"
            size="large"
          >
            Sign Up
          </Button>
          <Divider />
          <p className="form_hint">Take me back to <a className="form__link" href="/log-in">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
