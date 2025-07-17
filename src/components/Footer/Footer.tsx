import React from 'react';
import styled from 'styled-components';
import { BottomSection, BrandSection, ContactEmail, Copyright, Description, FooterContainer, FooterContent, GroupTitle, Link, LinkGroup, LinkItem, LinkList, LinksSection, Logo, MainSection } from './Footer.styled';



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
