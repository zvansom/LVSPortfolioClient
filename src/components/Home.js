import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// Component imports
import MainStyles from './styles/MainStyles';
import SkillsStyles from './styles/SkillsStyles';
import ClientsStyles from './styles/ClientsStyles';

// Image imports
import pencil from '../static/images/writing icon.png';
import bullhorn from '../static/images/speaking icon.png';
import profile from '../static/images/profile1.png';
import testimonial1 from '../static/images/testimonial 1.png';
import testimonial2 from '../static/images/testimonial 2.png';

const TestimonialStyles = styled.section`
  text-align: center;
  h2 {
    color: var(--green);
    padding-top: 4rem;
    text-transform: uppercase;
  }
  p {
    margin: 1rem 0 4rem 0;
  }
  .testimonials {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .card {
    padding: 6rem;
    span {
      font-weight: normal;
    }
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
    <TestimonialStyles>
      <div className="container">
        <h2>What clients say</h2>
        <h3>Need proof? Here's what some of my clients have to say:</h3>
        <div className="testimonials">
          <div className="card">
            <img src={testimonial1} alt="Lea Tirard-Hersant, The Staircase" />
            <h4>Lea Tirard-Hersant<span>, The Staircase</span></h4>
            <p>"I'm a French author and business owner, and I was looking for a professional writer to help us proofread and publish good content in English. You know, it takes time to find the right, reliable and talented person. I tried working with different copywriters... until I found Lindsay. Lindsay is the talented, professional, dynamic and reliable writer that we were looking for. We'll soon be celebrating a year of collaboration, and it's only the beginning!"</p>
          </div>
          <div className="card">
            <img src={testimonial2} alt="Rob Nelson, Untamed Science" />
            <h4>Rob Nelson<span>, Untamed Science</span></h4>
            <p>"Lindsay is unique in the world of science and science writers I've worked with. Not only is she extremely knowledgable - although plenty of people that know their stuff - but she's willing to put in the work that is needed to get the job done. Sometimes that means learning new things. She brings the ultimate professionalism to the plate. If she says she's going to do something you can count on her word. I wish everyone I ever worked with was like Lindsay."</p>
          </div>
        </div>
      </div>
    </TestimonialStyles>
  </>
);

export default Home;
