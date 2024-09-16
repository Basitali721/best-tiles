import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

const ScreenShotsSlider = ({ data, columns, isLoading }) => {
  // const [selectedUrl, setSelectedUrl] = useState(`/assets/images/products/product_1.jpg`);
  const [selectedUrl, setSelectedUrl] = useState(`/assets/images/products/product_1.jpg`);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        mb={{ md: 5, xs: 2 }}
        minHeight="400px"
        width={{ sm: '350px', xs: '100%' }}
      >
        <img
          width="100%"
          height="auto"
          style={{ objectFit: 'contain', borderRadius: '10px' }}
          src={selectedUrl}
          alt=""
        />
      </Box>
      <Swiper
        // pagination={{
        //   type: 'progressbar',
        // }}
        navigation
        slidesPerView={1}
        spaceBetween="24px"
        modules={[Pagination, Navigation]}
        className="product-screenshots-slider"
        breakpoints={{
          // When screen size is 600px or larger, show 4 slides
          1024: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide
            key={item}
            onClick={() => {
              setSelectedUrl(`/assets/images/products/product_${item}.jpg`);
            }}
          >
            <Box>
              <img
                width="100%"
                height={130}
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                  opacity: selectedUrl === `/assets/images/products/product_${item}.jpg` ? 1 : 0.4,
                  border:
                    selectedUrl === `/assets/images/products/product_${item}.jpg`
                      ? '1px solid #FFF'
                      : 'none',
                }}
                src={`/assets/images/products/product_${item}.jpg`}
                alt=""
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

ScreenShotsSlider.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default ScreenShotsSlider;
