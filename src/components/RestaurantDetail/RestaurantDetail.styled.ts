import styled from "styled-components";

export const DetailContainer = styled.div<{ $colors: any }>`
  min-height: 100vh;
  background: ${({ $colors }) => $colors.background};
`;

export const HeroSection = styled.section<{ $image: string }>`
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

export const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
`;

export const Tagline = styled.div<{ $color: string }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ $color }) => $color};
  margin-bottom: 1rem;
`;

export const RestaurantName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
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

export const ContentSection = styled.section`
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionGrid = styled.div`
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

export const InfoCard = styled.div<{ $color: string }>`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-left: 4px solid ${({ $color }) => $color};
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colors.accent};
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeatureItem = styled.li`
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

export const HoursList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HoursItem = styled.div`
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

export const Day = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

export const MapSection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

export const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const MapTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 2rem 0;
  color: ${({ theme }) => theme.colors.accent};
`;

export const MapWrapper = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ContactItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

export const ContactLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const ContactValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;