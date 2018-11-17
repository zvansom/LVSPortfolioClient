import React from 'react';
import { Link } from 'react-router-dom';

import profile from '../static/images/profile2.png';
import facebook from '../static/images/facebook.png';
import linkedin from '../static/images/linkedin.png';
import twitter from '../static/images/twitter.png';

const About = () => (
  <>
    <section>
      <h2>Not your average writer</h2>
      <p>I've had a lot of unique and weird experiences in life.</p>
      <p>I've been in the National Spelling Bee, I've lived in Alaska for 10 years, and I've helped train an Iditarod dogsled team and raise a herd of caribou.</p>
    </section>
    <main>
      <div className="image">
        <img src={profile} alt="Lindsay VanSomeren" />
        <div className="social-media">
          <a href="https://www.facebook.com/lindsay.vansomeren" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Lindsay VanSomeren Facebook" /></a>
          <a href="https://www.linkedin.com/in/lindsayvansomeren/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Lindsay VanSomeren LinkedIn" /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Lindsay VanSomeren Twitter" /></a>
        </div>
      </div>
      <div className="about">
        <p>I've spent my whole life reading and writing, and I have two degrees in Wildlife <b>Biology and Conservation.</b></p>

        <p>These experiences have all resulted in my own particular lens in which I view life.
        <br />
        <b>It's what brings the awesome sauce to your content.</b>
        </p>

        <h2>What I do</h2>

        <p>One of my greatest passions in life is learning. I've made it a personal value to never stop learning. Here is a sampling of some of the things I've learned to do:</p>

        <ul>
          <li>Spin yarn</li>
          <li>Paddle a canoe upriver</li>
          <li>Design knitting patterns</li>
          <li>Speak/read/write French</li>
          <li>Catch birds with mist nets</li>
          <li>Speed read and not comprehend anything</li>
        </ul>

        <p>If you'd like to see some of the things I've written, check out my portfolio.</p>

        <Link to="/portfolio" className="button">See full portfolio</Link>
        <Link to="/contact" className="button">Contact me</Link>
      </div>
    </main>
  </>
);

export default About;