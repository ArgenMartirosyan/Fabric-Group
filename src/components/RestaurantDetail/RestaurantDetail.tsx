import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { restaurants, Restaurant } from '../../data/restaurants';
import SimpleMap from '../SimpleMap/SimpleMap';
import { BackButton, CardTitle, ContactInfo, ContactItem, ContactLabel, ContactValue, ContentSection, Day, Description, DetailContainer, FeatureItem, FeatureList, HeroContent, HeroSection, HoursItem, HoursList, InfoCard, MapContainer, MapSection, MapTitle, MapWrapper, RestaurantName, SectionGrid, Tagline, Time } from './RestaurantDetail.styled';



const RestaurantDetail: React.FC<{ restaurantId: string  }> = ({ restaurantId }) => {
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