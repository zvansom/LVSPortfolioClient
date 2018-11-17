import styled from 'styled-components';

import background from '../../static/images/main_bg.png';

const MainStyles = styled.main`
  display: grid;
  grid-template-columns: 25% 50%;
  margin: 0 auto;
  padding: 12rem 12%;
  padding-bottom: 8rem;
  gap: 6rem;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #FAFAFC;
  background-position: right;
  img {
    max-width: 375px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 6rem;
    margin-bottom: 7rem;
    span {
      display: block;
    }
  }
  p {
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.8rem;
    margin: 3rem 0;
  }
  p:last-of-type {
    margin-bottom: 5rem;
  }
  .highlight {
    color: var(--green);
  }
  .button {
    background: var(--green);
    padding: 1.5rem 3rem;
    color: white;
    margin-top: 500px;
    margin-right: 4rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    img {
      display: none;
    }
    .message {
      padding: 6rem;
      max-width: 75%;
    }
  }
  @media (max-width: 760px) {
    background-image: none;
    .message {
      padding: 0;
      margin: 0 auto;
    }
    .button {
      margin-right: 1rem;
    }
  }
  @media (max-width: 480px) {
    .button {
      text-align: center;
      display: block;
      margin: 2rem 0;
    }
  }
  `;

export default MainStyles;