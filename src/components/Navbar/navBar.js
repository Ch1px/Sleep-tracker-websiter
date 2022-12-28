import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { useState } from 'react';
import UserLogin from "../../pages/userLogin";

const AuthButton = () => {
	// Initialize state variable to track if user is signed in
	const [isSignedIn, setIsSignedIn] = useState(false);
  
	// Toggle the isSignedIn state variable when the button is clicked
	const handleClick = () => {
	  setIsSignedIn(!isSignedIn);
	};
  
	return (
	  <button onClick={handleClick}>
		{isSignedIn ? 'Sign Out' : 'Sign In'}
	  </button>
	);
  };

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/index">
			Home
		</NavLink>
		<NavLink to="/about">
			About
		</NavLink>
		<NavLink to="/tracker">
			Journey
		</NavLink>
		<NavLink to="/contact">
			Contact Us
		</NavLink>
		</NavMenu>
		<NavLink to="/log-in" >
			Sign in
		</NavLink>
		{AuthButton()}
	</Nav>
	</>
);
};

export default Navbar;
