import React from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components';

// Component imports
import MainStyles from './styles/MainStyles';
import SkillsStyles from './styles/SkillsStyles';
import ClientsStyles from './styles/ClientsStyles';

// Image imports
import pencil from '../static/images/writing icon.png';
import bullhorn from '../static/images/speaking icon.png';
import profile from '../static/images/profile1.png';

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
    <SkillsStyles>
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
    </SkillsStyles>
    <ClientsStyles>
      <div className="container">
        <h2>Amazing clients</h2>
        <p>I have written hundreds of articles for many clients over the years, including:</p>
        <div className="images">
          <img className="image" src="#" alt="Propser and Thrive" />
          <img className="image" src="#" alt="Untamed Science" /> 
          <img className="image" src="#" alt="Wise Bread" />
          <img className="image" src="#" alt="Credit Karma" />
          <img className="image" src="#" alt="Grow from acorns" />
          <img className="image" src="#" alt="Society of Grownups" />
          <img className="image" src="#" alt="Magnify Money" />
          <img className="image" src="#" alt="Credit Seasame" />
        </div>
      </div>
  </ClientsStyles>
  </>
);

export default Home;
