import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import GradientSection from './styles/GradientSection';

import facebook from '../static/images/facebook.png';
import linkedin from '../static/images/linkedin.png';
import twitter from '../static/images/twitter.png';

const ContactMain = styled.main`
  p {
    text-align: center;
    margin: 6rem 0;
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
  state = {
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
    sending: false,
  }
  
  handleSubmit = async e => {
    e.preventDefault();
    const {sending, ...data} = this.state;
    console.log(data);
    const res = await axios.post('http://localhost:7777/test', data);
    console.log(res);
    this.setState({sending: true});
  }

  handleChange = e => { this.setState({[e.target.name]: e.target.value}) }
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
          {!this.state.sending && (
            <>
              <p>Drop me a line below</p>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="First Name *"  />
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Last Name *"  />
                <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Subject" />
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email *"  />
                <textarea rows="5" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message"></textarea>
                <button type="submit" className="button">Send</button>
              </form>
            </>
          )}
          {this.state.sending && (
            <div>
              Your message is being sent!
            </div>
          )}
        </ContactMain>
      </>
    );
  }
}

export default Contact;