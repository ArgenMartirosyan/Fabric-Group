import React from 'react';
import Footer from '../Footer/Footer';
import FloatingNavbar from '../FloatingNavbar/FloatingNavbar';
import { ContentWrapper, Main } from './Layout.styled';



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <FloatingNavbar />
    <Main>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Main>
    <Footer />
  </>
);

export default Layout; 
