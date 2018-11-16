import React from 'react';
import { Link } from 'react-router-dom';

import MainStyles from './styles/MainStyles';

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
  </>
);

export default Home;
