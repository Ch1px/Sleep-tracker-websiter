
import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

import { Button, Divider, Input } from 'antd';


function createUser(email, username, password) {
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
      alert(
        `Success! User ${username} was successfully created!`
      );
      return true;
    },
    function(error) {
      // Sign up failed, display an error message
      console.error("Error creating user:", error);
      alert(`Error! ${error}`);
      return false;
    }
  );
}

const SignUp = () => {
  // State variables
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Functions used by the screen components
  const doSignUp = async function () {
      // Since the signUp method returns a Promise, we need to call it using await
      await createUser(email, username, password);
  };

  return (
    <div>
      <div className="container">
        <h2 className="heading">{'User Registration'}</h2>
        <Divider />
        <div className="form_wrapper">
        <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            size="large"
			      type="email"
            className="form_input"
          />
          <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            size="large"
			      type="username"
            className="form_input"
          />
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            size="large"
            type="password"
            className="form_input"
          />
        </div>
        <div className="form_buttons">
          <Button
            onClick={() => doSignUp()}
            type="primary"
            className="form_button"
            color={'#208AEC'}
            size="large"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
