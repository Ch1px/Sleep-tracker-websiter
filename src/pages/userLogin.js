import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import { Navigate } from 'react-router-dom';

import { Button, Divider, Input } from 'antd';

export const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    if (currentUser !== null) {
      alert(
        'Success!',
        `${currentUser.get('username')} is the current user!`,
      );
    }
    return currentUser;
  };

  export const UserLogin = () => {
    // State variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
  
    const doUserLogIn = async function () {
    
      // Note that these values come from state variables that we've declared before
      try {
        const loggedInUser = await Parse.User.logIn(email, password);
        // logIn returns the corresponding ParseUser object
        alert(
          `Success! User ${loggedInUser.get(
            'username'
          )} has successfully signed in!`
        );
        // To verify that this is in fact the current user, `current` can be used
        const currentUser = await Parse.User.current();
        console.log(loggedInUser === currentUser);
        // Clear input fields
        setEmail('');
        setPassword('');
        // Update state variable holding current user
        getCurrentUser();
        return true;
      } catch (error) {
        // Error can be caused by wrong parameters or lack of Internet connection
        alert(`Error! ${error.message}`);
        return false;
      }
    };
  
    const doUserLogOut = async function () {
      try {
        await Parse.User.logOut();
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.current();
        if (currentUser === null) {
          alert('Success! No user is logged in anymore!');
        }
        // Update state variable holding current user
        getCurrentUser();
        return true;
      } catch (error) {
        alert(`Error! ${error.message}`);
        return false;
      }
    };
  
    // Function that will return current user and also update current username
    const getCurrentUser = async function () {
      const currentUser = await Parse.User.current();
      // Update state variable holding current user
      setCurrentUser(currentUser);
      return currentUser;
    };
  
    return (
      <div>
        {currentUser === null && (
          <div className="container">
            <h2 className="heading">{'User Login'}</h2>
            <Divider />
            <div className="form_wrapper">
              <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                size="large"
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
                onClick={() => doUserLogIn()}
                href="index"
                type="primary"
                className="form_button"
                size="large"
              >
                Log In
              </Button>
              <Divider/>
              <p className="form_hint">Don't have an account? <a className="form__link" href="/sign-up">Sign up</a></p>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default UserLogin;
