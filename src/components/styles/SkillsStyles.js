import styled from 'styled-components';

const SkillsStyles = styled.section`
  background: linear-gradient(45deg, #3cb778, #1bb6c4);
  color: white;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .skill {
    margin: 10rem 0;
    padding: 0 30%;
    text-align: center;
    h2 {
      margin-top: 2rem;
      text-transform: uppercase;
      font-weight: 900;
    }
    p {
      line-height: 1.5rem;
    }
  }
  .skill:first-of-type {
    border-right: 2px solid white;
  }
`;

export default SkillsStyles;