import React, { useState } from 'react';
import styled from 'styled-components';

const events = [
  {
    title: 'Summer Aperitivo Night',
    description: 'Join us for a special summer evening with live music, signature cocktails, and delicious bites at all Fabrica Group restaurants!',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    date: 'July 15, 2025',
    category: 'Special Event'
  },
  {
    title: 'Wine Tasting Week',
    description: 'Explore a curated selection of wines from Italy, Spain, and France. Special tasting menus available with expert sommeliers.',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
    date: 'August 2-9, 2025',
    category: 'Wine & Dine'
  },
  {
    title: 'Family Brunch Fiesta',
    description: 'Bring your family for a Sunday brunch with kids activities, live cooking demonstrations, and more surprises!',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
    date: 'Every Sunday',
    category: 'Family Event'
  },
];

const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const EventCard = styled.div`
  background: #fff;
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  width: 100%;
  min-height: 180px;
  max-width: 700px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0,0,0,0.12);
  }
`;

const EventImage = styled.img`
  width: 180px;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
`;

const EventContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EventHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

const EventCategory = styled.span`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.button};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-start;
`;

const EventTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

const EventDesc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  line-height: 1.5;
  flex: 1;
`;

const EventFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
`;

const EventDate = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 500;
`;

const ReadMoreButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.375rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.button};
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

const NavBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.05);
  }
`;

const EventCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
`;

const NewsEventsCarousel: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? events.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === events.length - 1 ? 0 : i + 1));
  const event = events[idx];

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>News & Events</SectionTitle>
        <SectionSubtitle>
          Stay updated with our latest events, special offers, and exciting news from the Fabrica Group family
        </SectionSubtitle>
      </SectionHeader>
      
      <CarouselContainer>
        <EventCard>
          <EventImage src={event.image} alt={event.title} />
          <EventContent>
            <EventHeader>
              <EventCategory>{event.category}</EventCategory>
              <EventTitle>{event.title}</EventTitle>
            </EventHeader>
            <EventDesc>{event.description}</EventDesc>
            <EventFooter>
              <EventDate>{event.date}</EventDate>
              <ReadMoreButton href="#">Read More</ReadMoreButton>
            </EventFooter>
          </EventContent>
        </EventCard>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <NavButtons>
            <NavBtn aria-label="Previous event" onClick={prev}>&larr;</NavBtn>
            <NavBtn aria-label="Next event" onClick={next}>&rarr;</NavBtn>
          </NavButtons>
          <EventCounter>
            {idx + 1} of {events.length}
          </EventCounter>
        </div>
      </CarouselContainer>
    </SectionContainer>
  );
};

export default NewsEventsCarousel;
