import styled from "styled-components";

export const JourneyContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, rgba(215,38,56,0.1) 0%, rgba(255,209,102,0.1) 100%);
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  max-width: 900px;
  padding: 0 2rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1.5rem;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

export const HeroSubtitle = styled.p`
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

export const ScrollIndicator = styled.div`
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