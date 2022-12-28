import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

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
			View Sleep
		</NavLink>
		<NavLink to="/contact">
			Contact Us
		</NavLink>
		</NavMenu>
		<NavLink to="/sign-up" >
			Sign up
		</NavLink>
	</Nav>
	</>
);
};

export default Navbar;
