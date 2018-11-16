import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: var(--green);
  font-family: 'Milkshake';
  font-size: 5rem;
  line-height: 5rem;
  margin: 0;
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  line-height: 2.5rem;
  margin: 0;
`;

const LogoBox = styled.div`
  padding: 1rem;
`;


const Logo = () => (
  <LogoBox>
    <H1>Lindsay VanSomeren</H1>
    <H2>Freelance Content Writer</H2>
  </LogoBox>
);

export default Logo;