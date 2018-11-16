import React from 'react';
import { NavLink } from 'react-router-dom';
// import NavStyles from './styles/NavStyles';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  .nav-link {
    padding: 1rem 3rem;

  }
`;

const Nav = () => (
  <NavStyles>
    <NavLink 
      className="nav-link"
      activeClassName=""
      to="/"
    >
      <h1>Lindsay VanSomeren</h1>
    </NavLink>
    <ul>
      <NavLink 
        className="nav-link"
        activeClassName=""
        to="/about"
      >
        About Me
      </NavLink>
      <NavLink 
        className="nav-link"
        activeClassName=""
        to="/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink 
        className="nav-link"
        activeClassName=""
        to="/services"
      >
        Services
      </NavLink>
      <NavLink 
        className="nav-link"
        activeClassName=""
        to="/contact"
      >
        Contact Me
      </NavLink>
    </ul>
  </NavStyles>
);

export default Nav;