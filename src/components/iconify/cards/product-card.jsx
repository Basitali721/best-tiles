/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, Button, CardContent, Card, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ThemeModeColor } from 'src/utils/theme-mode-color';

const ProductCard = ({ item, index, cardBgColor }) => {
  const navigate = useNavigate();
  // console.log(item);
  const onClickHandler = (id) => {
    navigate(`/product-details?id=${id}`);
  };
  return (
    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} gap={1}>
        <Box
          onClick={() => onClickHandler(item.id)}
          sx={{
            // backgroundImage: `url(${item.img})`,
            transition: 'transform 0.2s ease-in-out',
            borderRadius: '10px',
            height: 300,
            ':hover': {
              transform: 'scale(1.04)',
            },
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px' }}
            src={item.img}
            alt=""
          />
          <Box
            sx={{
              width: 52,
              height: 33,
              bgcolor: '#E72C55',
              position: 'absolute',
              right: 0,
              top: 0,
              // mt: 0.5,
              color: '#fff',
              borderRadius: '0 10px 0 10px',
              px: 1,
              py: 0.5,
            }}
          >
            {item.discount}
          </Box>
        </Box>

        <Card
          sx={{
            borderRadius: '10px',
            bgcolor: cardBgColor
              ? ThemeModeColor('#CDC2EB59', cardBgColor)
              : ThemeModeColor('#CDC2EB59', '#0C0020'),
          }}
        >
          <CardContent sx={{ px: '25px', py: '22px', display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                textAlign: 'left',
                fontWeight: 400,
                fontSize: '20px',
                color: cardBgColor ? ThemeModeColor('#000', '#fff') : 'inherit',
              }}
            >
              {item.name1}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, gap: 0.6 }}>
              <Typography
                sx={{
                  textAlign: 'left',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: cardBgColor ? ThemeModeColor('#000', '#fff') : 'inherit',
                }}
              >
                {item.price}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Rating
                  name="half-rating-read"
                  size="small"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontWeight: 400,
                    fontSize: '8px',
                    color: cardBgColor ? ThemeModeColor('#000', '#fff') : 'inherit',
                  }}
                >
                  (5 Star Rating)
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
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
                  fontSize: '16px',
                  height: '40px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  px: { md: 2, xs: '6px' },
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ProductCard;
