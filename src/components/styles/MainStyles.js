import styled from 'styled-components';

import background from '../../static/images/main_bg.png';

const MainStyles = styled.main`
  display: grid;
  grid-template-columns: 25% 50%;
  margin: 0 auto;
  padding: 8rem 6%;
  padding-bottom: 4rem;
  gap: 6rem;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #FAFAFC;
  background-position: right top;
  img {
    width: 100%;
  }
  div {
    /* max-width: 65%;   */
  }
  h2 {
    text-transform: uppercase;
    font-size: 3.5rem;
    line-height: 5rem;
    margin-bottom: 3rem;
    span {
      display: block;
    }
  }
  p {
    line-height: 1.8rem;
    margin: 2rem 0;
  }
  p:last-of-type {
    margin-bottom: 5rem;
  }
  .highlight {
    color: var(--green-bright);
  }
  .button {
    background: var(--green);
    padding: 1rem 3rem;
    color: white;
    margin-top: 500px;
    margin-right: 4rem;
  }
`;

export default MainStyles;