import React from 'react';
import styled from 'styled-components';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import Header from './Header';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Page = () => (
  <Router>
    <StyledPage>
      {/* <Header /> */}
      This is the page content!
    </StyledPage>
  </Router>
);

export default Page;