import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f6f3 0%, #fdfbf7 100%);
  padding: 100px 1.5rem 3rem;
`;

const GalleryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  color: #8B4513;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
`;

export default function GalleryPage() {
  return (
    <GalleryContainer>
      <GalleryContent>
        <Title>Gallery</Title>
        <Subtitle>
          Explore the unique atmosphere and culinary experiences across all five 
          Fabrica Group restaurants through our curated collection of images.
        </Subtitle>
        <p>Gallery content coming soon...</p>
      </GalleryContent>
    </GalleryContainer>
  );
} 