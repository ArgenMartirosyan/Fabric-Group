import React from 'react';
import styled from 'styled-components';
import { restaurants } from '../data/restaurants';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f6f3 0%, #fdfbf7 100%);
  padding: 100px 1.5rem 3rem;
  
  @media (max-width: 768px) {
    padding: 80px 1rem 1.5rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 3.5rem;
    font-weight: 700;
    color: #8B4513;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .subtitle {
    font-size: 1.25rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
`;

const StorySection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
  
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.5rem;
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 1.5rem;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    text-align: justify;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ValuesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.5rem;
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const RestaurantsSection = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.5rem;
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 2rem;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RestaurantCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const RestaurantImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
              url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const RestaurantContent = styled.div`
  padding: 1.5rem;
`;

const RestaurantName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 0.5rem;
`;

const RestaurantTagline = styled.p`
  font-size: 0.9rem;
  color: #8B4513;
  font-weight: 500;
  margin-bottom: 1rem;
  font-style: italic;
`;

const RestaurantDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const RestaurantFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FeatureTag = styled.span`
  background: #f0f0f0;
  color: #8B4513;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #8B4513, #A0522D);
  color: white;
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
  
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatItem = styled.div`
  .number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .label {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

export default function AboutUsPage() {
  return (
    <AboutContainer>
      <AboutContent>
        <HeroSection>
          <h1>Our Story</h1>
          <p className="subtitle">
            From a single vision to five unique culinary experiences, 
            Fabrica Group has been crafting unforgettable moments in Yerevan since our founding.
          </p>
        </HeroSection>

        <StorySection>
          <h2>The Fabrica Group Journey</h2>
          <p>
            Born from a passion for exceptional dining and a vision to create diverse culinary experiences, 
            Fabrica Group began as a dream to bring the world's flavors to the heart of Yerevan. What started 
            as a single restaurant has grown into a family of five unique establishments, each with its own 
            distinct personality and culinary identity.
          </p>
          <p>
            Our journey began with Fabrica, a sun-drenched loft space that redefined the brunch experience 
            in Yerevan. The success of this concept inspired us to explore different culinary worlds, leading 
            to the creation of Zanzibar's tropical paradise, El Torro's Spanish elegance, Babylon's mystical 
            Middle Eastern charm, and Antar's Nordic sophistication.
          </p>
          <p>
            Today, Fabrica Group stands as a testament to our commitment to culinary excellence, innovative 
            design, and creating spaces where memories are made. Each restaurant is carefully crafted to 
            transport guests to different corners of the world while maintaining the warmth and hospitality 
            that defines Armenian culture.
          </p>
        </StorySection>

        <ValuesSection>
          <ValueCard>
            <div className="icon">🌟</div>
            <h3>Excellence</h3>
            <p>
              We strive for excellence in every detail, from our carefully curated menus to our 
              thoughtfully designed spaces and exceptional service.
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">🌍</div>
            <h3>Diversity</h3>
            <p>
              Our restaurants celebrate the rich diversity of global cuisines, bringing authentic 
              flavors and experiences from around the world to Yerevan.
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">💝</div>
            <h3>Hospitality</h3>
            <p>
              At the heart of everything we do is genuine hospitality - creating welcoming spaces 
              where every guest feels valued and cared for.
            </p>
          </ValueCard>
        </ValuesSection>

        <RestaurantsSection>
          <h2>Our Family of Restaurants</h2>
          <RestaurantGrid>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id}>
                <RestaurantImage imageUrl={restaurant.image} />
                <RestaurantContent>
                  <RestaurantName>{restaurant.name}</RestaurantName>
                  <RestaurantTagline>{restaurant.tagline}</RestaurantTagline>
                  <RestaurantDescription>{restaurant.description}</RestaurantDescription>
                  <RestaurantFeatures>
                    {restaurant.features.slice(0, 3).map((feature, index) => (
                      <FeatureTag key={index}>{feature}</FeatureTag>
                    ))}
                  </RestaurantFeatures>
                </RestaurantContent>
              </RestaurantCard>
            ))}
          </RestaurantGrid>
        </RestaurantsSection>

        <StatsSection>
          <h2>Our Impact</h2>
          <StatsGrid>
            <StatItem>
              <div className="number">5</div>
              <div className="label">Unique Restaurants</div>
            </StatItem>
            <StatItem>
              <div className="number">15+</div>
              <div className="label">Years of Experience</div>
            </StatItem>
            <StatItem>
              <div className="number">50+</div>
              <div className="label">Team Members</div>
            </StatItem>
            <StatItem>
              <div className="number">1000+</div>
              <div className="label">Happy Guests Daily</div>
            </StatItem>
          </StatsGrid>
        </StatsSection>
      </AboutContent>
    </AboutContainer>
  );
} 