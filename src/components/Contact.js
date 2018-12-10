import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import GradientSection from './styles/GradientSection';

import facebook from '../static/images/facebook.png';
import linkedin from '../static/images/linkedin.png';
import twitter from '../static/images/twitter.png';

import { htmlContentBuilder } from '../static/js/mail';

const ContactMain = styled.main`
  position: relative;
  .error {
  margin: 2rem auto;
  display: flex;
  justify-self: center;
  border: 3px solid red;
}
.error p {
  margin: 2rem auto;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
}
  p {
    text-align: center;
    margin: 6rem 0;
  }
  img {
    transition: scale 0.4s ease;
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
  @media (max-width: 600px) {
    form {
      display: flex;
      flex-direction: column;
      input, textarea {
        margin: 0 0 4rem 0;
      }
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
    error: false,
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const {subject, email, firstname, lastname, message} = this.state;
    const headers = {
      'content-type': 'application/json',
      'api-key': process.env.REACT_APP_SENDINBLUE_API,
    };
    const body =   { 
      tags: [ 'portfolio' ],
      to: [ { email: 'lindsayvansomeren@gmail.com', name: 'Lindsay VanSomeren' } ],
      sender: { email, name: `${firstname} ${lastname}` },
      subject: `WRITING INQUIRY: ${subject}`,
      htmlContent: htmlContentBuilder(email, message, firstname, lastname),
      textContent: message,
      replyTo: { email, name: `${firstname} ${lastname}` } 
    };
    console.log('form submitted');
    axios.post('https://api.sndinblue.com/v3/smtp/email', body, { headers })
      .then( res => {
        console.log(res)
        this.setState({ 
          sending: true,
          error: false,
        });
      })
      .catch(err => { this.setState({ error: true }); });
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
            <a href="https://www.facebook.com/lindsay.vansomeren" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Lindsay VanSomeren Facebook" className="hover" /></a>
            <a href="https://www.linkedin.com/in/lindsayvansomeren/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Lindsay VanSomeren LinkedIn" className="hover" /></a>
            <a href="https://twitter.com/Science_Finance" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Lindsay VanSomeren Twitter" className="hover" /></a>
          </div>
        </GradientSection>
        <ContactMain className="container">
          {this.state.error && (
            <div className="error">
              <p>Uh oh! Something didn't work. Please try submitting the contact form again.</p>
            </div>
          )}
          <p>Drop me a line below</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="First Name *" />
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Last Name *" />
            <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Subject" />
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email *" />
            <textarea rows="5" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message"></textarea>
            <button type="submit" className="button">Send</button>
          </form>
          <div className={this.state.sending ? 'container message-sent slide' : 'container message-sent'}>
            <h2>Your message has been sent!</h2>
            <p>Thanks for reaching out. I'll get back to you at the email address you provided as soon as I'm able.</p>
            <p>Talk to you soon!</p>
          </div>
        </ContactMain>
      </>
    );
  }
}

export default Contact;