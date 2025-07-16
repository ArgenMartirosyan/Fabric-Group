import React from 'react';
import styled from 'styled-components';

const restaurants = [
  {
    name: 'Zanzibar',
    description: 'Rustic Mediterranean charm meets contemporary flair',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    menuUrl: '/zanzibar/menu',
    bookUrl: '#',
  },
  {
    name: 'El Torro',
    description: 'Vibrant Spanish tapas and authentic flavors',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
    menuUrl: '/eltorro/menu',
    bookUrl: '#',
  },
  {
    name: 'La Dolce Vita',
    description: 'Elegant Italian dining with a modern twist',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    menuUrl: '/ladolcevita/menu',
    bookUrl: '#',
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const Card = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.card};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.2s ease;
  min-height: 360px;
  background: ${({ theme }) => theme.colors.muted};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.2s ease;
  
  ${Card}:hover & {
    transform: scale(1.02);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(0deg, rgba(35,31,32,0.9) 0%, rgba(35,31,32,0.7) 50%, rgba(35,31,32,0.1) 100%);
  padding: 1.75rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.01em;
`;

const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1.25rem 0;
  line-height: 1.5;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const MenuButton = styled.a`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 0.625rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: translateY(-1px);
  }
`;

const BookButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 0.625rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`;

const RestaurantCardsGrid: React.FC = () => (
  <SectionContainer>
    <SectionHeader>
      <SectionTitle>Our Restaurants</SectionTitle>
      <SectionSubtitle>
        Each venue tells its own unique story, offering authentic Mediterranean experiences that celebrate the rich traditions of passionate cooking
      </SectionSubtitle>
    </SectionHeader>
    
    <Grid>
      {restaurants.map((restaurant) => (
        <Card key={restaurant.name}>
          <CardImage src={restaurant.image} alt={restaurant.name} />
          <Overlay>
            <CardTitle>{restaurant.name}</CardTitle>
            <CardDescription>{restaurant.description}</CardDescription>
            <ButtonRow>
              <MenuButton href={restaurant.menuUrl}>View Menu</MenuButton>
              <BookButton href={restaurant.bookUrl}>Book a Table</BookButton>
            </ButtonRow>
          </Overlay>
        </Card>
      ))}
    </Grid>
  </SectionContainer>
);

export default RestaurantCardsGrid;