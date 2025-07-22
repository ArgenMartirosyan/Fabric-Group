import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MissionBlockContainer = styled.section`
  background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
  padding: 4rem 2rem;
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin: 3rem 0;
  }
`;

const MissionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: white;
`;

const MissionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MissionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  background: white;
  color: #8B4513;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: #f8f6f3;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
`;

const MissionBlock: React.FC = () => {
  const router = useRouter();

  const handleMissionClick = () => {
    router.push('/mission');
  };

  return (
    <MissionBlockContainer>
      <MissionContent>
        <MissionTitle>Our Mission</MissionTitle>
        <MissionText>
          To create extraordinary dining experiences that celebrate diversity, 
          foster community, and elevate the culinary landscape of Yerevan. 
          Discover how we're transforming the city's dining scene through 
          our five unique restaurants.
        </MissionText>
        <CTAButton onClick={handleMissionClick}>
          Learn More About Our Mission
        </CTAButton>
      </MissionContent>
    </MissionBlockContainer>
  );
};

export default MissionBlock; 