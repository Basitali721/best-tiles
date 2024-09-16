import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

// import "./styles.css";

// import required modules
// import { Navigation } from 'swiper/modules';

export default function HeroSlider() {
  // const [currentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/New-folder/image.jpg',
    },
    {
      image: '/assets/New-folder/image-1.jpg',
    },
    {
      image: '/assets/New-folder/image-2.jpg',
    },

    // Add more slides as needed
  ];
  return (
    <Box>
      <Swiper
        autoplay={{ delay: 6000 }}
        speed={1200}
        loop
        navigation
        modules={[Navigation, Autoplay]}
        className="hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              style={{ cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover' }}
              src={slide.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
