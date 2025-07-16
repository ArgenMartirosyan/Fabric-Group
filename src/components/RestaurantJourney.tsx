import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { restaurants } from '../data/restaurants';

const JourneyContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, rgba(215,38,56,0.1) 0%, rgba(255,209,102,0.1) 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 900px;
  padding: 0 2rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const HeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: clamp(1.25rem, 3.5vw, 1.75rem);
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 3rem 0;
  line-height: 1.6;
  opacity: 0.85;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  opacity: 0.7;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  
  @media (max-width: 768px) {
    bottom: 2rem;
    font-size: 0.875rem;
  }
`;

const RestaurantsSection = styled.section`
  padding: 6rem 0;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const RestaurantsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 4rem 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    margin: 0 0 3rem 0;
  }
`;

const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const RestaurantCard = styled.div<{ $colors: any }>`
  position: relative;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
    
    img {
      transform: scale(1.05);
    }
    
    .overlay {
      background: linear-gradient(
        0deg, 
        rgba(0,0,0,0.8) 0%, 
        rgba(0,0,0,0.4) 50%, 
        rgba(0,0,0,0.1) 100%
      );
    }
  }
  
  @media (max-width: 768px) {
    height: 400px;
    border-radius: 16px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    0deg, 
    rgba(0,0,0,0.7) 0%, 
    rgba(0,0,0,0.3) 50%, 
    rgba(0,0,0,0.1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem;
  transition: background 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CardContent = styled.div`
  color: white;
`;

const CardTagline = styled.div<{ $color: string }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ $color }) => $color};
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
  max-width: 280px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 100%;
  }
`;

const ExploreButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.5);
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const RestaurantJourney: React.FC = () => {
  const router = useRouter();

  const handleRestaurantClick = (restaurantId: string) => {
    router.push(`/${restaurantId}`);
  };

  return (
    <JourneyContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to Fabrica Group</HeroTitle>
          <HeroSubtitle>
            Four unique restaurants, four distinct moods. From brunchy lofts to exotic escapes, 
            discover your perfect dining experience in the heart of Yerevan.
          </HeroSubtitle>
        </HeroContent>
        <ScrollIndicator>
          <span>Scroll to explore</span>
          <div>↓</div>
        </ScrollIndicator>
      </HeroSection>

      <RestaurantsSection>
        <RestaurantsContainer>
          <SectionTitle>Our Restaurants</SectionTitle>
          <RestaurantsGrid>
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                $colors={restaurant.colors}
                onClick={() => handleRestaurantClick(restaurant.id)}
              >
                <CardImage src={restaurant.image} alt={restaurant.name} />
                <CardOverlay className="overlay">
                  <CardContent>
                    <CardTagline $color={restaurant.colors.secondary}>
                      {restaurant.tagline}
                    </CardTagline>
                    <CardTitle>{restaurant.name}</CardTitle>
                    <CardDescription>{restaurant.description}</CardDescription>
                    <ExploreButton>
                      Explore
                      <span>→</span>
                    </ExploreButton>
                  </CardContent>
                </CardOverlay>
              </RestaurantCard>
            ))}
          </RestaurantsGrid>
        </RestaurantsContainer>
      </RestaurantsSection>
    </JourneyContainer>
  );
};

export default RestaurantJourney; 