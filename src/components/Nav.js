import React from 'react';
import { NavLink } from 'react-router-dom';
// import NavStyles from './styles/NavStyles';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  align-items: center;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  .nav-link {
    color: var(--logo-grey);
    font-size: 2rem;
    padding: 1rem 3rem;
    transition: all 0.1s ease;
  }
  .nav-link:hover {
    font-size: 2.1rem;
  }
  .active-page {
    color: var(--green-bright);
    font-weight: 900;
    border-bottom: solid 1px var(--green-bright);
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    ul {
      padding: 0;
      display: block;
      margin: 2rem 0;
    }
  }
  @media (max-width: 600px) {
    text-align: center;
    .nav-link {
      padding: 1rem 1.2rem;
      font-size: 1.8rem;
    }
  }
`;

const Nav = () => (
  <NavStyles>
    <NavLink 
      className="nav-link"
      to="/"
    >
      <Logo />
    </NavLink>
    <ul>
      <NavLink 
        className="nav-link"
        activeClassName="active-page"
        to="/about"
      >
        About Me
      </NavLink>
      <NavLink 
        className="nav-link"
        activeClassName="active-page"
        to="/portfolio"
      >
        Portfolio
      </NavLink>
      <NavLink 
        className="nav-link"
        activeClassName="active-page"
        to="/services"
      >
        Services
      </NavLink>
      <NavLink 
        className="nav-link"
        activeClassName="active-page"
        to="/contact"
      >
        Contact Me
      </NavLink>
    </ul>
  </NavStyles>
);

export default Nav;