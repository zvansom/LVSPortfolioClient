import React from 'react';
import styled from 'styled-components';

import GradientSection from './styles/GradientSection';

import Carousel from './Carousel';

const PortfolioMain = styled.main`
  padding: 6rem 0;
  h3 {
    color: green;
    font-size: 3rem;
    text-transform: uppercase;
  }
  p {
    font-size: 2rem;
  }
`;

const Portfolio = () => (
  <>
    <GradientSection>
      <p>I primarially write in two areas:</p>
      <h2>Personal finance & science</h2>
    </GradientSection>
    <PortfolioMain className="container">
      <div>
        <h3>Personal finance articles</h3>
        <p>Here are some of my personal finance articles.</p>
        <p>I can write light, fun, educational pieces as well as in-depth guides to financial products:</p>
        <Carousel />
        {/* Carousel here */}
      </div>
      <div>
        <h3>Science articles</h3>
        {/* Carousel here */}
      </div>
    </PortfolioMain>
  </>
);

export default Portfolio;