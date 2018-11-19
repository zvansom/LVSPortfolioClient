import React from 'react';
import styled from 'styled-components';

import GradientSection from './styles/GradientSection';

import facebook from '../static/images/facebook.png';
import linkedin from '../static/images/linkedin.png';
import twitter from '../static/images/twitter.png';

const ContactMain = styled.main`
  p {
    text-align: center;
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <>
        <GradientSection>
          <h2>Looking to collaborate?</h2>
          <h3>Ready for a quick, no-obligation quote?</h3>
          <h3>Find me on:</h3>
          <div className="social-media">
            <a href="https://www.facebook.com/lindsay.vansomeren" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Lindsay VanSomeren Facebook" /></a>
            <a href="https://www.linkedin.com/in/lindsayvansomeren/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Lindsay VanSomeren LinkedIn" /></a>
            <a href="https://twitter.com/NotoriousDEBT" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Lindsay VanSomeren Twitter" /></a>
          </div>
        </GradientSection>
        <ContactMain className="container">
          <p>Drop me a line below</p>
          <form>
            <label>
              <input type="text" />
            </label>
          </form>
        </ContactMain>
      </>
    );
  }
}

export default Contact;