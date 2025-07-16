import React from 'react';
import styled from 'styled-components';

const restaurants = [
  {
    name: 'Zanzibar',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    menuUrl: '/zanzibar/menu',
    bookUrl: '#',
  },
  {
    name: 'El Torro',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
    menuUrl: '/eltorro/menu',
    bookUrl: '#',
  },
  {
    name: 'La Dolce Vita',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    menuUrl: '/ladolcevita/menu',
    bookUrl: '#',
  },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.gridGap};
  width: 100%;
  max-width: 1200px;
  margin: ${({ theme }) => theme.spacing.section} auto;
`;

const Card = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.card};
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  transition: transform 0.18s, box-shadow 0.18s;
  min-height: 340px;
  background: ${({ theme }) => theme.colors.muted};
  &:hover {
    transform: scale(1.035);
    box-shadow: 0 8px 32px rgba(0,0,0,0.16);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(0deg, rgba(35,31,32,0.88) 70%, rgba(35,31,32,0.18) 100%);
  padding: 2.2rem 1.5rem 1.3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.7rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 1.1rem 0;
  letter-spacing: 1px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const MenuButton = styled.a`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 0.6rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

const BookButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 0.6rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const RestaurantCardsGrid: React.FC = () => (
  <Grid>
    {restaurants.map((r) => (
      <Card key={r.name}>
        <CardImage src={r.image} alt={r.name} />
        <Overlay>
          <CardTitle>{r.name}</CardTitle>
          <ButtonRow>
            <MenuButton href={r.menuUrl}>Menu</MenuButton>
            <BookButton href={r.bookUrl}>Book a Table</BookButton>
          </ButtonRow>
        </Overlay>
      </Card>
    ))}
  </Grid>
);

export default RestaurantCardsGrid; 