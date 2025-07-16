import React from 'react';
import Footer from './Footer';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import FloatingNavbar from './FloatingNavbar';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  padding-top: 80px; /* Account for fixed navbar on desktop */
  width: 100%;
  
  @media (max-width: 768px) {
    padding-top: 0; /* No padding on mobile since navbar is hidden */
  }
`;

const ContentWrapper = styled.div`
  width: 85%;
  max-width: 1600px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    width: 90%;
  }
  
  @media (max-width: 768px) {
    width: 92%;
  }
  
  @media (max-width: 480px) {
    width: 95%;
  }
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <FloatingNavbar />
    <Sidebar />
    <Main>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Main>
    <Footer />
  </>
);

export default Layout; 