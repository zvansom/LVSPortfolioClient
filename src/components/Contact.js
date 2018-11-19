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
  form {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    margin-bottom: 10rem;
    input, textarea {
      font-size: 2rem;
      padding: 1rem 0 1rem 2rem;
    }
    textarea {
      grid-column: span 2;
    }
    button {
      grid-column: -1 / 2;
      margin: 0;
      justify-self: end;
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }
`;

class Contact extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e)
  }
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
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstname" placeholder="First Name *" required />
            <input type="text" name="lastname" placeholder="Last Name *" required />
            <input type="text" name="subject" placeholder="Subject" />
            <input type="email" name="email" placeholder="Email *" required />
            <textarea rows="5" name="message" placeholder="Message"></textarea>
            <button type="submit" className="button">Send</button>
          </form>
        </ContactMain>
      </>
    );
  }
}

export default Contact;