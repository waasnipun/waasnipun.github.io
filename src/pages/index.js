import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Jobs, About, Blogs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      {/* <Hero /> */}
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Blogs />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
