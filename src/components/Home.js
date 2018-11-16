import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import MainStyles from './styles/MainStyles';

import pencil from '../static/images/writing icon.png';
import bullhorn from '../static/images/speaking icon.png';
import profile from '../static/images/profile1.png';

const SkillsSection = styled.section`
  background: linear-gradient(45deg, #35B67C, #23BAC4);
  color: white;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .skill {
    margin: 8rem 0;
    padding: 0 10rem;
    text-align: center;
    h2 {
      margin-top: 2rem;
      text-transform: uppercase;
      font-weight: 900;
    }
    p {
      line-height: 1.5rem;
    }
  }
  .skill:first-of-type {
    border-right: 2px solid white;
  }
`;

const Home = () => (
  <>
    <MainStyles>
      <img src={profile} alt="Lindsay VanSomeren Freelance Writer" />
      <div>
        <h2><span className="highlight">Awesome content</span>  spreads your message</h2>
        <p>I want to help you tell it</p>
        <p>I'm the type of person who likes to burrow into the nitty-gritty details. The types of things that other people glaze over.</p>
        <p>There is a story hidden in every data set; finding it and getting others excited about it is my passion</p>
        <Link to="/portfolio" className="button">See full portfolio</Link>
        <Link to="/contact" className="button">Contact me</Link>
      </div>
    </MainStyles>
    <SkillsSection>
      <div className="container">
        <div className="skill">
          <img src={pencil} alt="Pencil" />
          <h2>Writing</h2>
          <p>I can create written materials for online or print publication that spread the word about what</p>
        </div>
        <div className="skill">
          <img src={bullhorn} alt="Bullhorn" />
          <h2>Speaking</h2>
          <p>I can create custom, live presentations to inform and entertain your group.</p>
        </div>
      </div>
    </SkillsSection>
  </>
);

export default Home;
