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
import prosper from '../static/images/client-imgs/prosper.png';
import untamedScience from '../static/images/client-imgs/74221UntamedScience-anchor-dl.jpg';
import wisebread from '../static/images/client-imgs/wisebread.png';
import creditKarma from '../static/images/client-imgs/creditkarma.png';
import grow from '../static/images/client-imgs/growacorns.png';
import SoG from '../static/images/client-imgs/society-of-grown-ups-logo.png';
import magnify from '../static/images/client-imgs/magnify-money.jpg';
import creditSeasame from '../static/images/client-imgs/credit-sesame-companyupdate-1509557471073.jpg';

const TestimonialStyles = styled.section`
  text-align: center;
  padding: 7rem 0 10rem;
  h2 {
    color: var(--green);
    text-transform: uppercase;
    font-size: 4.5rem;
    font-weight: 900;
    line-height: 4.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: normal;
  }
  .testimonials {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .card {
    justify-self: center;
    max-width: 60%;
    h4 {
      font-size: 2rem;
    }
    span {
      font-weight: normal;
    }
    p {
      font-size: 2rem;
      font-weight: 100;
      line-height: 2rem;
    }
  }
  @media (max-width: 500px) {
    .testimonials {
      grid-template-columns: 1fr;
    }
  }
`;

const Home = () => (
  <>
    <MainStyles>
      <img src={profile} alt="Lindsay VanSomeren Freelance Writer" />
      <div className="message">
        <h2><span className="highlight">Awesome content</span>  spreads your message</h2>
        <p>I want to help you tell it.</p>
        <p>I'm the type of person who likes to burrow into the nitty-gritty details. The types of things that other people glaze over.</p>
        <p>There is a story hidden in every data set; finding it and getting others excited about it is my passion.</p>
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
      <div className="filter">
        <div className="container">
          <h2>Amazing clients</h2>
          <p>I have written hundreds of articles for many clients over the years, including:</p>
          <div className="images">
            <img className="image" src={prosper} alt="Propser and Thrive" />
            <img className="image" src={untamedScience} alt="Untamed Science" /> 
            <img className="image" src={wisebread} alt="Wise Bread" />
            <img className="image" src={creditKarma} alt="Credit Karma" />
            <img className="image" src={grow} alt="Grow from acorns" />
            <img className="image" src={SoG} alt="Society of Grownups" />
            <img className="image" src={magnify} alt="Magnify Money" />
            <img className="image" src={creditSeasame} alt="Credit Seasame" />
          </div>
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
