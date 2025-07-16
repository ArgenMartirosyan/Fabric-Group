import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { restaurants, Restaurant } from '../data/restaurants';
import SimpleMap from './SimpleMap';

const DetailContainer = styled.div<{ $colors: any }>`
  min-height: 100vh;
  background: ${({ $colors }) => $colors.background};
`;

const HeroSection = styled.section<{ $image: string }>`
  height: 100vh;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ), url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
`;

const Tagline = styled.div<{ $color: string }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ $color }) => $color};
  margin-bottom: 1rem;
`;

const RestaurantName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`;

const ContentSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const InfoCard = styled.div<{ $color: string }>`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-left: 4px solid ${({ $color }) => $color};
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colors.accent};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const HoursList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Day = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;

const Time = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const MapSection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MapTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 2rem 0;
  color: ${({ theme }) => theme.colors.accent};
`;

const MapWrapper = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const ContactLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const RestaurantDetail: React.FC<{ restaurantId: string }> = ({ restaurantId }) => {
  const router = useRouter();
  const restaurant = restaurants.find(r => r.id === restaurantId);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const handleBack = () => {
    router.push('/');
  };

  return (
    <DetailContainer $colors={restaurant.colors}>
      <HeroSection $image={restaurant.heroImage}>
        <BackButton onClick={handleBack}>
          ← Back to Home
        </BackButton>
        <HeroContent>
          <Tagline $color={restaurant.colors.secondary}>
            {restaurant.tagline}
          </Tagline>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <Description>{restaurant.description}</Description>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionGrid>
          <InfoCard $color={restaurant.colors.primary}>
            <CardTitle>Atmosphere & Cuisine</CardTitle>
            <FeatureList>
              <FeatureItem><strong>Mood:</strong> {restaurant.mood}</FeatureItem>
              <FeatureItem><strong>Cuisine:</strong> {restaurant.cuisine}</FeatureItem>
              <FeatureItem><strong>Atmosphere:</strong> {restaurant.atmosphere}</FeatureItem>
            </FeatureList>
          </InfoCard>

          <InfoCard $color={restaurant.colors.primary}>
            <CardTitle>Features</CardTitle>
            <FeatureList>
              {restaurant.features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeatureList>
          </InfoCard>

          <InfoCard $color={restaurant.colors.primary}>
            <CardTitle>Opening Hours</CardTitle>
            <HoursList>
              {Object.entries(restaurant.hours).map(([day, time]) => (
                <HoursItem key={day}>
                  <Day>{day}</Day>
                  <Time>{time}</Time>
                </HoursItem>
              ))}
            </HoursList>
          </InfoCard>

          <InfoCard $color={restaurant.colors.primary}>
            <CardTitle>Location</CardTitle>
            <FeatureList>
              <FeatureItem>{restaurant.location.address}</FeatureItem>
              <FeatureItem><strong>Phone:</strong> {restaurant.location.phone}</FeatureItem>
              <FeatureItem><strong>Email:</strong> {restaurant.location.email}</FeatureItem>
            </FeatureList>
          </InfoCard>
        </SectionGrid>
      </ContentSection>

      <MapSection>
        <MapContainer>
          <MapTitle>Find Us</MapTitle>
          <MapWrapper>
            <SimpleMap 
              coordinates={restaurant.location.coordinates}
              address={restaurant.location.address}
            />
          </MapWrapper>
          <ContactInfo>
            <ContactItem>
              <ContactLabel>Address</ContactLabel>
              <ContactValue>{restaurant.location.address}</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Phone</ContactLabel>
              <ContactValue>{restaurant.location.phone}</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>{restaurant.location.email}</ContactValue>
            </ContactItem>
          </ContactInfo>
        </MapContainer>
      </MapSection>
    </DetailContainer>
  );
};

export default RestaurantDetail; 