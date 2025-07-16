import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const ImageSection = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.card};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const AboutImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(35,31,32,0.8) 0%, transparent 100%);
  padding: 1.5rem;
  color: white;
`;

const OverlayText = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer>
      <ContentSection>
        <SectionTitle>Our Story</SectionTitle>
        <Subtitle>Inspired by Big Mamma Group</Subtitle>
        <Description>
          At <HighlightText>Fabrica Group</HighlightText>, we believe that dining is not just about food—it's about creating unforgettable experiences that bring people together. Our journey began with a simple vision: to craft authentic, passionate dining experiences that celebrate the rich traditions of Mediterranean cuisine.
        </Description>
        <Description>
          Each of our restaurants tells its own unique story, from the rustic charm of <HighlightText>Zanzibar</HighlightText> to the vibrant energy of <HighlightText>El Torro</HighlightText>, and the elegant sophistication of <HighlightText>La Dolce Vita</HighlightText>. We pour our hearts into every dish, every detail, and every moment.
        </Description>
        <Description>
          Just like the Big Mamma Group, we believe in the power of <HighlightText>authenticity</HighlightText>, <HighlightText>passion</HighlightText>, and <HighlightText>community</HighlightText>. Every meal is an opportunity to create memories that last a lifetime.
        </Description>
      </ContentSection>
      
      <ImageSection>
        <AboutImage 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
          alt="Fabrica Group Story" 
        />
        <ImageOverlay>
          <OverlayText>"Where every meal tells a story"</OverlayText>
        </ImageOverlay>
      </ImageSection>
    </AboutContainer>
  );
};

export default AboutSection; 