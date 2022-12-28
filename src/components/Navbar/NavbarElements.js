import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
align-items: center;
height: 85px;
display: flex;
justify-content: space-between;
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #ffffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 2rem;
height: 100%;
font-size: 1.1rem;
cursor: pointer;
&.active {
	color: #FEBA4F;
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
padding: 0.2rem calc((100vw - 1000px) / 2);
`;
