import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  height: 100px;
  background: var(--logo-grey);
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  p {
    font-size: 2rem;  
  }
`;

const Footer = () => (
  <FooterStyles>
    <p>💩 Copywrites Reserved</p>
  </FooterStyles>
);

export default Footer;