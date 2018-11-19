import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

import GradientSection from './styles/GradientSection';

import pencilGreen from '../static/images/writing icon green.png';
import bullhornGreen from '../static/images/speaking icon green.png';

const Services = () => (
  <>
    <GradientSection>
      <h2>Here's what I can write for you</h2>
      <h3>Interested in Working Together?</h3>
      <Link to="/portfolio" className="button">See full portfolio</Link>
      <Link to="/contact" className="button">Contact me</Link>
    </GradientSection>
    <main className="container">
      <div className="writing">
        <img src={pencilGreen} alt="Writing" />
        <h3>Writing</h3>
        <p>Need custom content for your organization? I offer the following writing services:</p>
        <ul>
          <li>Articles and blog posts</li>
          <li>White papers</li>
          <li>Newsletters</li>
          <li>Brochures</li>
          <li>Booklets</li>
          <li>Ebooks</li>
          <li>Tweets</li>
        </ul>
        <p>All online content is written with <b>SEO optimization</b> in mind.</p>
        <p>I also offer <b>ghostwriting</b> services.</p>
      </div>
      <div className="speaking">
        <img src={bullhornGreen} alt="Speaking" />
        <h3>Speaking</h3>
        <p>I've been a Toastmaster for two years. That means I'm able to deliver your message clearly and effectively to your group.</p>
      </div>
    </main>
  </>
);

export default Services;