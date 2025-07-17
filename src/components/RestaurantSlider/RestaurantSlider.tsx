import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/router';
import { restaurants } from '../../data/restaurants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CardContent, CardImage, CardImageContainer, CardOverlay, ExploreButton, RestaurantCard, RestaurantDescription, RestaurantName, RestaurantTagline, SliderContainer, SliderTitle, StyledSwiper } from './RestaurantSlider.styled';



const RestaurantSlider: React.FC = () => {
  const router = useRouter();

  const handleRestaurantClick = (restaurantId: string) => {
    router.push(`/restaurant/${restaurantId}`);
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