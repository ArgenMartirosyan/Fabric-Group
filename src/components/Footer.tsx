import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background: #222;
  color: #fff;
  padding: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.15s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const SocialIcon = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const CertLogo = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 1.5rem;
`;

const Copyright = styled.small`
  color: #bbb;
  margin-top: 1rem;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <LinksRow>
      <FooterLink href="#">Legal Information</FooterLink>
      <FooterLink href="#">Join Us</FooterLink>
      <FooterLink href="#">Who are we?</FooterLink>
      <FooterLink href="#">FAQ & Contact</FooterLink>
    </LinksRow>
    <SocialRow>
      <SocialIcon title="Instagram">📸</SocialIcon>
      <SocialIcon title="Facebook">📘</SocialIcon>
      <SocialIcon title="Twitter">🐦</SocialIcon>
      <CertLogo title="Certification">✔️</CertLogo>
    </SocialRow>
    <Copyright>
      &copy; {new Date().getFullYear()} Fabrica Group. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer;
