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
  background-color: #F6f7f8;
  background-position: right top;
  img {
    max-width: 100%;
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
  @media (max-width: 1080px) {
    padding: 4rem;
    gap: 4rem;
    background-size: contain;
    img {
      justify-self: center;
    }
    .message {
      justify-self: center;
    }
  }
  @media (max-width: 760px) {
    .message {
      padding: 0;
      margin: 0 auto;
    }
    .button {
      margin-right: 1rem;
    }
  }
  @media (max-width: 480px) {
    background-image: none;
    .button {
      text-align: center;
      display: block;
      margin: 2rem 0;
    }
  }
  `;

export default MainStyles;