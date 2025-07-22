import React from 'react';
import styled from 'styled-components';
import { restaurants } from '../data/restaurants';

const MissionContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f6f3 0%, #fdfbf7 100%);
  padding: 100px 1.5rem 3rem;
  
  @media (max-width: 768px) {
    padding: 80px 1rem 1.5rem;
  }
`;

const MissionContent = styled.div`
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

const MissionStatementSection = styled.div`
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

const VisionSection = styled.div`
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
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

const ImpactSection = styled.div`
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

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  .number {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.5rem;
    font-weight: 700;
    color: #8B4513;
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 1rem;
    color: #666;
    font-weight: 500;
  }
`;

const CommitmentSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
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

export default function MissionPage() {
  return (
    <MissionContainer>
      <MissionContent>
        <HeroSection>
          <h1>Our Mission</h1>
          <p className="subtitle">
            To create extraordinary dining experiences that celebrate diversity, 
            foster community, and elevate the culinary landscape of Yerevan.
          </p>
        </HeroSection>

        <MissionStatementSection>
          <h2>Our Mission Statement</h2>
          <p>
            At Fabrica Group, our mission is to transform the dining experience in Yerevan 
            by creating five unique restaurants that each tell their own story while sharing 
            a common commitment to excellence, innovation, and community.
          </p>
          <p>
            We believe that great food has the power to bring people together, create 
            lasting memories, and celebrate the rich cultural tapestry of our city. 
            Through our diverse portfolio of restaurants, we aim to offer something 
            for every occasion, every palate, and every moment in life.
          </p>
          <p>
            From the sun-drenched brunch vibes of Fabrica to the mystical Arabian nights 
            of Babylon, from the tropical paradise of Zanzibar to the sophisticated 
            elegance of El Torro and the minimalist Nordic charm of Antar – each venue 
            is carefully crafted to provide not just a meal, but an experience that 
            resonates with our guests long after they leave.
          </p>
        </MissionStatementSection>

        <VisionSection>
          <h2>Our Vision</h2>
          <p>
            We envision Fabrica Group as the premier dining destination in Yerevan, 
            recognized not just for our exceptional food and service, but for our 
            commitment to innovation, sustainability, and community engagement.
          </p>
          <p>
            Our vision extends beyond the walls of our restaurants. We see ourselves 
            as catalysts for positive change in our community – creating meaningful 
            employment opportunities, supporting local suppliers and artisans, and 
            contributing to the cultural vibrancy of Yerevan.
          </p>
          <p>
            We aspire to be a model for responsible business practices in the hospitality 
            industry, demonstrating that commercial success and social responsibility 
            can go hand in hand. Through our commitment to quality, our respect for 
            tradition, and our embrace of innovation, we aim to set new standards 
            for dining excellence in Armenia.
          </p>
        </VisionSection>

        <ValuesSection>
          <ValueCard>
            <div className="icon">🌟</div>
            <h3>Excellence</h3>
            <p>
              We pursue excellence in everything we do – from the quality of our 
              ingredients to the warmth of our service, from the creativity of our 
              menus to the ambiance of our spaces.
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">🤝</div>
            <h3>Community</h3>
            <p>
              We believe in the power of community and strive to create spaces where 
              people can connect, celebrate, and create lasting memories together.
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">🌱</div>
            <h3>Sustainability</h3>
            <p>
              We are committed to sustainable practices, from sourcing local ingredients 
              to minimizing our environmental impact and supporting responsible farming.
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">💡</div>
            <h3>Innovation</h3>
            <p>
              We embrace innovation while respecting tradition, constantly exploring 
              new ways to delight our guests and push the boundaries of culinary excellence.
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">❤️</div>
            <h3>Passion</h3>
            <p>
              Our passion for food, service, and creating memorable experiences 
              drives everything we do and inspires our team to go above and beyond.
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">🌍</div>
            <h3>Diversity</h3>
            <p>
              We celebrate diversity in all its forms – from our team members to 
              our culinary influences, from our guests to our community partners.
            </p>
          </ValueCard>
        </ValuesSection>

        <ImpactSection>
          <h2>Our Impact</h2>
          <p>
            Since our founding, Fabrica Group has made a meaningful impact on the 
            Yerevan dining scene and our local community. We've created hundreds of 
            jobs, supported dozens of local suppliers, and welcomed thousands of 
            guests through our doors.
          </p>
          <p>
            Our restaurants have become gathering places for celebrations, business 
            meetings, romantic dinners, and casual get-togethers. We've hosted 
            countless special moments and created memories that will last a lifetime.
          </p>
          <p>
            Beyond our restaurants, we're proud to support local initiatives, 
            participate in community events, and contribute to the cultural 
            vibrancy of Yerevan. We believe that great businesses have a 
            responsibility to give back to the communities that support them.
          </p>
        </ImpactSection>

        <StatsSection>
          <StatCard>
            <div className="number">5</div>
            <div className="label">Unique Restaurants</div>
          </StatCard>
          <StatCard>
            <div className="number">200+</div>
            <div className="label">Team Members</div>
          </StatCard>
          <StatCard>
            <div className="number">50+</div>
            <div className="label">Local Suppliers</div>
          </StatCard>
          <StatCard>
            <div className="number">10K+</div>
            <div className="label">Happy Guests</div>
          </StatCard>
        </StatsSection>

        <CommitmentSection>
          <h2>Our Commitment</h2>
          <p>
            As we continue to grow and evolve, our commitment to our mission, 
            vision, and values remains unwavering. We promise to always put our 
            guests first, to maintain the highest standards of quality and service, 
            and to be a positive force in our community.
          </p>
          <p>
            We are committed to continuous improvement, to listening to feedback, 
            and to adapting to the changing needs and preferences of our guests. 
            We believe that the best is yet to come, and we're excited to continue 
            this journey with you.
          </p>
          <p>
            Thank you for being part of our story. Together, we're not just serving 
            meals – we're creating experiences, building community, and making 
            Yerevan a more vibrant and delicious place to live and visit.
          </p>
        </CommitmentSection>
      </MissionContent>
    </MissionContainer>
  );
} 