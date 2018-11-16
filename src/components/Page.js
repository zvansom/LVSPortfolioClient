import React from 'react';
import styled from 'styled-components';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Page = () => (
  <Router>
    <StyledPage>
      <Nav />
      <Route path="/" exact component={Home} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/portfolio" component={Portfolio} /> */}
      {/* <Route path="/services" component={Services} /> */}
      {/* <Route path="/contact" component={Contact} /> */}
    </StyledPage>
  </Router>
);

export default Page;