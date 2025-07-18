import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BottomSection, BrandSection, ContactEmail, Copyright, Description, FooterContainer, FooterContent, GroupTitle, StyledLink, LinkGroup, LinkItem, LinkList, LinksSection, Logo, MainSection } from './Footer.styled';



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
                  <Link href="/about" passHref>
                    <StyledLink>Our Story</StyledLink>
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link href="/join-our-team" passHref>
                    <StyledLink>Join Our Team</StyledLink>
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link href="#private-hire" passHref>
                    <StyledLink>Private Hire</StyledLink>
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link href="#menu" passHref>
                    <StyledLink>Menu</StyledLink>
                  </Link>
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
