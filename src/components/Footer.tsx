import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem 0 1rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.1) 50%, 
      transparent 100%);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 0 0.75rem 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const BrandSection = styled.div`
  flex: 1;
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LinksSection = styled.div`
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
`;

const LinkGroup = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const GroupTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.75rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.375rem;
  }
`;

const Link = styled.a`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const ContactEmail = styled.a`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <MainSection>
          <BrandSection>
            <Logo>Fabrica Group</Logo>
            <Description>
              5 unique restaurants in Yerevan, each with its own distinct culinary experience and atmosphere.
            </Description>
          </BrandSection>
          
          <LinksSection>
            <LinkGroup>
              <GroupTitle>Company</GroupTitle>
              <LinkList>
                <LinkItem>
                  <Link href="#our-story">Our Story</Link>
                </LinkItem>
                <LinkItem>
                  <Link href="#careers">Join Our Team</Link>
                </LinkItem>
                <LinkItem>
                  <Link href="#private-hire">Private Hire</Link>
                </LinkItem>
                <LinkItem>
                  <Link href="#menu">Menu</Link>
                </LinkItem>
              </LinkList>
            </LinkGroup>
            
            <LinkGroup>
              <GroupTitle>Contact</GroupTitle>
              <LinkList>
                <LinkItem>
                  <ContactEmail href="mailto:hello@fabricagroup.am">
                    hello@fabricagroup.am
                  </ContactEmail>
                </LinkItem>
                <LinkItem>
                  <ContactEmail href="mailto:reservations@fabricagroup.am">
                    reservations@fabricagroup.am
                  </ContactEmail>
                </LinkItem>
              </LinkList>
            </LinkGroup>
          </LinksSection>
        </MainSection>

        <BottomSection>
          <Copyright>
            © {currentYear} Fabrica Group. All rights reserved.
          </Copyright>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
