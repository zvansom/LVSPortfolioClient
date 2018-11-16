import styled from 'styled-components';

const ClientsStyles = styled.section`
  background: var(--light-grey);
  text-align: center;
  h2 {
    color: var(--green);
    padding-top: 4rem;
    text-transform: uppercase;
  }
  p {
    margin: 1rem 0 4rem 0;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    padding-bottom: 5rem;
  }
  .image {
    width: 150px;
    height: 50px;
  }
`;

export default ClientsStyles;