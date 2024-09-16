/* eslint-disable react/button-has-type */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Card, Rating, Typography } from '@mui/material';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { sellingArr } from 'src/_mock/Home';
import { ThemeModeColor } from 'src/utils/theme-mode-color';
import { useNavigate } from 'react-router-dom';

export default function ComboDiscountProductsSlider() {
  const navigate = useNavigate();
  // console.log(item);
  const onClickHandler = (id) => {
    navigate(`/product-details?id=${id}`);
  };
  return (
    <Card
      sx={{
        bgcolor: (theme) => theme.palette.background.default,
        p: { md: 5, xs: 2 },
      }}
    >
      <Typography sx={{ fontSize: { md: '30px', xs: '20px' }, mb: 5, ml: { md: 5 } }}>
        Add these products to get a discount on combining your purchase
      </Typography>
      <Swiper
        slidesPerView={1} // Show one slide at a time on mobile
        spaceBetween={40}
        navigation
        modules={[Navigation]}
        className="combo-discount-products-slider"
        breakpoints={{
          // When screen size is 600px or larger, show 4 slides
          1200: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {sellingArr.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box
          onClick={() => onClickHandler(slide.id)}

                sx={{
                  
                  transition: 'transform 0.2s ease-in-out',
                  borderRadius: '10px',
                  height: 250,
                  ':hover': {
                    transform: 'scale(1.05)',
                  },
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
               
                  <img
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                    }}
                    src={slide.img}
                    alt=""
                  />
                <Box
                  sx={{
                    height: '44px',
                    px: '16px',
                    borderRadius: '10px 10px 0 0',
                    bgcolor: '#E72C55',
                    position: 'absolute',
                    top: '-34px',
                    width: '100%',
                    zIndex: -1,
                    textAlign: 'center',
                  }}
                >
                  <Typography fontSize={15} fontWeight={600} mt="6px" color="white">
                    Combo Discount: 10%
                  </Typography>
                </Box>
              </Box>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  // bgcolor:'#1F143D',
                  bgcolor: ThemeModeColor('#E3DCF3', '#1F143D'),
                  p: 2,
                  boxShadow: 'none',
                }}
              >
                <Typography fontSize={15} textAlign="left">
                  {slide.name1}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                  gap={1}
                >
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontWeight: 200,
                      fontSize: 14,
                    }}
                  >
                    {slide.price}
                  </Typography>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Typography
                    sx={{
                      fontSize: 8,
                    }}
                  >
                    (5 Start Rating)
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    sx={{
                      background: '#3E228B',
                      borderRadius: '10px',
                      minWidth: '40px',
                      width: '40px',
                      height: '40px',
                      p: '9px',
                      '&:hover': { background: '#2f1d61' },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5 3.58901C9.40071 0.831242 5.89274 -0.0210253 3.26244 2.50426C0.632126 5.02954 0.261814 9.25165 2.32741 12.2383C4.04482 14.7215 9.24227 19.9588 10.9457 21.654C11.1362 21.8436 11.2316 21.9384 11.3427 21.9756C11.4397 22.0081 11.5459 22.0081 11.6429 21.9756C11.7541 21.9384 11.8493 21.8436 12.0399 21.654C13.7434 19.9588 18.9408 14.7215 20.6582 12.2383C22.7238 9.25165 22.3987 5.00297 19.7232 2.50426C17.0476 0.0055395 13.5993 0.831242 11.5 3.58901Z"
                        stroke="white"
                        strokeOpacity="0.75"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>

                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      width: '100%',
                      fontSize: '15px',
                      height: '40px',
                      borderRadius: '10px',
                      fontWeight: 600,
                    }}
                  >
                    {slide.button}
                  </Button>
                </Box>
              </Card>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
}
