import React from 'react';
import { HeroContent, HeroSection, HeroSubtitle, HeroTitle, JourneyContainer, ScrollIndicator } from './RestaurantJourney.styled';


const RestaurantJourney: React.FC = () => {
  return (
    <JourneyContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to Fabrica Group</HeroTitle>
          <HeroSubtitle>
            Five unique restaurants, five distinct moods. From brunchy lofts to exotic escapes, 
            discover your perfect dining experience in the heart of Yerevan.
          </HeroSubtitle>
        </HeroContent>
        <ScrollIndicator>
          <span>Scroll to explore</span>
          <div>↓</div>
        </ScrollIndicator>
      </HeroSection>
    </JourneyContainer>
  );
};

export default RestaurantJourney; 