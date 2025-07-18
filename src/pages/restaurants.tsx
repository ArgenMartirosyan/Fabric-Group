import React from 'react';
import styled from 'styled-components';

const RestaurantsContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f6f3 0%, #fdfbf7 100%);
  padding: 120px 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 100px 1rem 2rem;
  }
`;

const RestaurantsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  font-weight: 700;
  color: #8B4513;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const HoursSection = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const HoursTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const RestaurantHours = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RestaurantCard = styled.div`
  padding: 1.5rem;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #8B4513;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 69, 19, 0.1);
  }
`;

const RestaurantName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 0.5rem;
`;

const RestaurantTagline = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  font-style: italic;
`;

const HoursList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DayRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Day = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
`;

const Time = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export default function RestaurantsPage() {
  const restaurantHours = [
    {
      name: 'Fabrica',
      tagline: 'Brunchy Loft Vibes',
      hours: {
        'Monday': '7:00 AM - 4:00 PM',
        'Tuesday': '7:00 AM - 4:00 PM',
        'Wednesday': '7:00 AM - 4:00 PM',
        'Thursday': '7:00 AM - 4:00 PM',
        'Friday': '7:00 AM - 6:00 PM',
        'Saturday': '8:00 AM - 6:00 PM',
        'Sunday': '8:00 AM - 4:00 PM',
      }
    },
    {
      name: 'Zanzibar',
      tagline: 'Jungle Cocktail Bar',
      hours: {
        'Monday': '5:00 PM - 2:00 AM',
        'Tuesday': '5:00 PM - 2:00 AM',
        'Wednesday': '5:00 PM - 2:00 AM',
        'Thursday': '5:00 PM - 2:00 AM',
        'Friday': '5:00 PM - 3:00 AM',
        'Saturday': '5:00 PM - 3:00 AM',
        'Sunday': '5:00 PM - 1:00 AM',
      }
    },
    {
      name: 'El Torro',
      tagline: 'Spanish Steakhouse',
      hours: {
        'Monday': '6:00 PM - 11:00 PM',
        'Tuesday': '6:00 PM - 11:00 PM',
        'Wednesday': '6:00 PM - 11:00 PM',
        'Thursday': '6:00 PM - 11:00 PM',
        'Friday': '6:00 PM - 12:00 AM',
        'Saturday': '6:00 PM - 12:00 AM',
        'Sunday': '6:00 PM - 10:00 PM',
      }
    },
    {
      name: 'Babylon',
      tagline: 'Exotic Arabesque',
      hours: {
        'Monday': '6:00 PM - 11:00 PM',
        'Tuesday': '6:00 PM - 11:00 PM',
        'Wednesday': '6:00 PM - 11:00 PM',
        'Thursday': '6:00 PM - 11:00 PM',
        'Friday': '6:00 PM - 12:00 AM',
        'Saturday': '6:00 PM - 12:00 AM',
        'Sunday': '6:00 PM - 10:00 PM',
      }
    },
    {
      name: 'Antar',
      tagline: 'Arctic Elegance',
      hours: {
        'Monday': '6:00 PM - 11:00 PM',
        'Tuesday': '6:00 PM - 11:00 PM',
        'Wednesday': '6:00 PM - 11:00 PM',
        'Thursday': '6:00 PM - 11:00 PM',
        'Friday': '6:00 PM - 12:00 AM',
        'Saturday': '6:00 PM - 12:00 AM',
        'Sunday': '6:00 PM - 10:00 PM',
      }
    }
  ];

  return (
    <RestaurantsContainer>
      <RestaurantsContent>
        <PageTitle>Our Restaurants</PageTitle>
        <PageDescription>
          Discover our five unique restaurants in Yerevan, each offering a distinct culinary experience 
          and atmosphere. From morning brunch to late-night cocktails, we have something for every occasion.
        </PageDescription>
        
        <HoursSection>
          <HoursTitle>Restaurant Hours</HoursTitle>
          <RestaurantHours>
            {restaurantHours.map((restaurant) => (
              <RestaurantCard key={restaurant.name}>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantTagline>{restaurant.tagline}</RestaurantTagline>
                <HoursList>
                  {Object.entries(restaurant.hours).map(([day, time]) => (
                    <DayRow key={day}>
                      <Day>{day}</Day>
                      <Time>{time}</Time>
                    </DayRow>
                  ))}
                </HoursList>
              </RestaurantCard>
            ))}
          </RestaurantHours>
        </HoursSection>
      </RestaurantsContent>
    </RestaurantsContainer>
  );
}
