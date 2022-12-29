import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { useState } from 'react';

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
	</Nav>
	</>
);
};

export default Navbar;
