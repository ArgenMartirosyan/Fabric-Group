import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/router';
import { restaurants } from '../data/restaurants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const SliderTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 1rem 0 3rem 0;
  
  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.9);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
    
    &::after {
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .swiper-pagination {
    bottom: 0;
  }
  
  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.3;
    transition: all 0.3s ease;
    
    &-active {
      background: ${({ theme }) => theme.colors.primary};
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

const RestaurantCard = styled.div`
  width: 100%;
  max-width: 350px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
    
    .card-image {
      transform: scale(1.05);
    }
    
    .card-overlay {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    max-width: 280px;
    border-radius: 12px;
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 160px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const RestaurantName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const RestaurantTagline = styled.div<{ $color: string }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ $color }) => $color};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const RestaurantDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ExploreButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const RestaurantSlider: React.FC = () => {
  const router = useRouter();

  const handleRestaurantClick = (restaurantId: string) => {
    router.push(`/${restaurantId}`);
  };

  return (
    <SliderContainer>
      <SliderTitle>Our Restaurants</SliderTitle>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.3}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2.8,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        loop={true}
        grabCursor={true}
        speed={600}
      >
        {restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <RestaurantCard onClick={() => handleRestaurantClick(restaurant.id)}>
              <CardImageContainer>
                <CardImage 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="card-image"
                />
                <CardOverlay className="card-overlay">
                  <ExploreButton>
                    Explore
                    <span>→</span>
                  </ExploreButton>
                </CardOverlay>
              </CardImageContainer>
              <CardContent>
                <RestaurantTagline $color={restaurant.colors.secondary}>
                  {restaurant.tagline}
                </RestaurantTagline>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantDescription>
                  {restaurant.description}
                </RestaurantDescription>
              </CardContent>
            </RestaurantCard>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </SliderContainer>
  );
};

export default RestaurantSlider; 