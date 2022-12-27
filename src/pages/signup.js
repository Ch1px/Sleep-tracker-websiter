
import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

import { Button, Divider, Input } from 'antd';

const SignUp = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Functions used by the screen components
  const doSignUp = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
	const emailValue = email;
    try {
      // Since the signUp method returns a Promise, we need to call it using await
      const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
      alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`
      );
      return true;
    } catch (error) {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      alert(`Error! ${error}`);
      return false;
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="heading">{'User Registration'}</h2>
        <Divider />
        <div className="form_wrapper">
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
