import React from 'react';
import styled from 'styled-components';

import GradientSection from './styles/GradientSection';

import Carousel from './Carousel';

const PortfolioMain = styled.main`
  padding: 6rem 0;
  h3 {
    color: green;
    padding-top: 4rem;
    font-size: 3rem;
    text-transform: uppercase;
  }
  p {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
`;

const Portfolio = () => (
  <>
    <GradientSection>
      <p>I primarially write in three areas:</p>
      <h2>Personal finance, science & travel</h2>
    </GradientSection>
    <PortfolioMain className="container">
      <div className="section">
        <h3>Personal finance articles</h3>
        <p>Here are some of my personal finance articles.</p>
        <p>I can write light, fun, educational pieces as well as in-depth guides to financial products:</p>
        <Carousel />
      </div>
      <div className="section">
        <h3>Science articles</h3>
        <Carousel />
      </div>
      <div className="section">
        <h3>Travel articles</h3>
        <Carousel />
      </div>
    </PortfolioMain>
  </>
);

export default Portfolio;