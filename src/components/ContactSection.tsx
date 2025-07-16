import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.muted};
  padding: 3rem 0;
  margin-top: 3rem;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  letter-spacing: -0.02em;
`;

const ContactText = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem;
  background: white;
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const ContactIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  font-weight: 600;
`;

const ContactInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

const ContactLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SocialTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0;
  letter-spacing: -0.01em;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.625rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii.button};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 600;
  font-size: 0.75rem;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`;

const SocialIcon = styled.span`
  font-size: 1rem;
`;

const ContactSection: React.FC = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactInfo>
          <SectionTitle>Get in Touch</SectionTitle>
          <ContactText>
            Ready to experience the magic of Fabrica Group? We'd love to hear from you. Whether you're looking to book a table, plan an event, or just want to say hello, we're here to help.
          </ContactText>
          
          <ContactDetails>
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactInfoText>
                <ContactLabel>Visit Us</ContactLabel>
                <ContactValue>Multiple locations across the city</ContactValue>
              </ContactInfoText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactInfoText>
                <ContactLabel>Call Us</ContactLabel>
                <ContactValue>+1 (555) 123-4567</ContactValue>
              </ContactInfoText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>✉️</ContactIcon>
              <ContactInfoText>
                <ContactLabel>Email Us</ContactLabel>
                <ContactValue>hello@fabricagroup.com</ContactValue>
              </ContactInfoText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>🕒</ContactIcon>
              <ContactInfoText>
                <ContactLabel>Opening Hours</ContactLabel>
                <ContactValue>Mon-Sun: 11:00 AM - 11:00 PM</ContactValue>
              </ContactInfoText>
            </ContactItem>
          </ContactDetails>
        </ContactInfo>
        
        <SocialSection>
          <SocialTitle>Follow Our Journey</SocialTitle>
          <ContactText>
            Stay connected with us on social media for the latest updates, behind-the-scenes moments, and exclusive offers.
          </ContactText>
          
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <SocialIcon>📸</SocialIcon>
              Instagram
            </SocialLink>
            
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <SocialIcon>📘</SocialIcon>
              Facebook
            </SocialLink>
            
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <SocialIcon>🐦</SocialIcon>
              Twitter
            </SocialLink>
            
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <SocialIcon>📺</SocialIcon>
              TikTok
            </SocialLink>
          </SocialLinks>
        </SocialSection>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;