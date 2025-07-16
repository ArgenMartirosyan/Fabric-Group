import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  width: 100%;
  height: 55vh;
  min-height: 340px;
  max-height: 520px;
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
  filter: brightness(0.7) saturate(1.1);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.55) 100%);
  z-index: 2;
`;

const Quote = styled.h1`
  position: relative;
  z-index: 3;
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  max-width: 90vw;
  text-shadow: 0 2px 16px rgba(0,0,0,0.35);
  letter-spacing: 0.5px;
`;

const Hero: React.FC = () => (
  <HeroContainer>
    <HeroImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" alt="Fabrica Group" />
    <Overlay />
    <Quote>
      "Where passion meets plate — Welcome to Fabrica Group!"
    </Quote>
  </HeroContainer>
);

export default Hero; 