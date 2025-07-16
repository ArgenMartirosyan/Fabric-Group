import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  width: 100%;
  height: 70vh;
  min-height: 500px;
  max-height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(0.6) saturate(1.1);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(215,38,56,0.15) 50%, rgba(0,0,0,0.4) 100%);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: #fff;
  margin: 0;
  text-shadow: 0 1px 8px rgba(0,0,0,0.3);
  max-width: 500px;
  line-height: 1.5;
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.875rem 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii.button};
  transition: all 0.2s ease;
  box-shadow: 0 2px 12px rgba(215,38,56,0.25);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(255,209,102,0.3);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: #fff;
  font-size: 0.75rem;
  opacity: 0.7;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-6px);
    }
    60% {
      transform: translateX(-50%) translateY(-3px);
    }
  }
`;

const ScrollArrow = styled.div`
  font-size: 1.25rem;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Hero: React.FC = () => (
  <HeroContainer>
    <HeroImage 
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80" 
      alt="Fabrica Group - Where passion meets plate" 
    />
    <Overlay />
    <HeroContent>
      <MainTitle>
        Welcome to <HighlightText>Fabrica Group</HighlightText>
      </MainTitle>
      <Subtitle>
        Where passion meets plate — Experience the magic of authentic Mediterranean cuisine in every bite
      </Subtitle>
      <CTAButton href="/restaurants">
        Discover Our Restaurants
      </CTAButton>
    </HeroContent>
    <ScrollIndicator>
      <span>Scroll to explore</span>
      <ScrollArrow>↓</ScrollArrow>
    </ScrollIndicator>
  </HeroContainer>
);

export default Hero; 