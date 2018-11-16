import React from 'react';
import styled from 'styled-components';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Nav from './Nav';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Home = () => <h2>This is the page content!</h2>

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