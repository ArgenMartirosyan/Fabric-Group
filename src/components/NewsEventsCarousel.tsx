import React, { useState } from 'react';
import styled from 'styled-components';

const events = [
  {
    title: 'Summer Aperitivo Night',
    description: 'Join us for a special summer evening with live music, signature cocktails, and delicious bites at all Fabrica Group restaurants!',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    date: 'July 15, 2025',
  },
  {
    title: 'Wine Tasting Week',
    description: 'Explore a curated selection of wines from Italy, Spain, and France. Special tasting menus available.',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
    date: 'August 2-9, 2025',
  },
  {
    title: 'Family Brunch Fiesta',
    description: 'Bring your family for a Sunday brunch with kids activities, live cooking, and more surprises!',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
    date: 'Every Sunday',
  },
];

const CarouselContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 2rem auto 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  width: 100%;
  min-height: 180px;
  max-width: 700px;
`;

const EventImage = styled.img`
  width: 180px;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
`;

const EventContent = styled.div`
  flex: 1;
  padding: 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EventTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: bold;
`;

const EventDesc = styled.p`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1rem;
`;

const EventDate = styled.div`
  color: #888;
  font-size: 0.95rem;
  margin-top: 0.5rem;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const NavBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: #222;
  }
`;

const NewsEventsCarousel: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? events.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === events.length - 1 ? 0 : i + 1));
  const event = events[idx];

  return (
    <CarouselContainer>
      <EventCard>
        <EventImage src={event.image} alt={event.title} />
        <EventContent>
          <EventTitle>{event.title}</EventTitle>
          <EventDesc>{event.description}</EventDesc>
          <EventDate>{event.date}</EventDate>
        </EventContent>
      </EventCard>
      <NavButtons>
        <NavBtn aria-label="Previous event" onClick={prev}>&larr;</NavBtn>
        <NavBtn aria-label="Next event" onClick={next}>&rarr;</NavBtn>
      </NavButtons>
    </CarouselContainer>
  );
};

export default NewsEventsCarousel;
