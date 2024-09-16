/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';
import { primaryFont } from 'src/theme/typography';

const ProductReviewCard = ({ product, username, rating, review, sellerReply }) => (
  <Box sx={{ display: 'flex' }}>
    <Card sx={{ color: 'white', m: 2, width: '329px', bgcolor: '#2D1964' }}>
      <CardContent>
        <Typography
          sx={{
            // display: 'flex',
            fontFamily: primaryFont,
            fontSize: '10px',
            textAlign: 'right',
            fontWeight: 400,
          }}
        >
          Product:AdVenture Capitalist
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', mt: 3, columnGap: 15 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img
              src="/assets/icons/AvatarCircle.svg"
              alt=""
              style={{ width: '24px', height: '24px' }}
            />
            <Typography sx={{ fontSize: '12px', fontFamily: primaryFont, mt: 1, fontWeight: 600 }}>
              UserName
            </Typography>
          </Box>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Box>
        <Typography sx={{ fontSize: '12px', fontFamily: primaryFont, mt: 1, fontWeight: 300 }}>
          Lorem ipsum dolor sit amet epilobga consec sed id massa morbi porta malesuada dictum.
          Lorem ipsum dolor sit amet consectetur sed id massa Lorem ipsum dolor sit amet malesu
        </Typography>
        <Typography sx={{ fontSize: '12px', fontFamily: primaryFont, mt: 2, fontWeight: 600 }}>
          Seller Reply
        </Typography>
        <Typography sx={{ fontSize: '12px', fontFamily: primaryFont, mt: 2, fontWeight: 300 }}>
          Lorem ipsum dolor sit amet epilobga consec sed id massa morbi porta malesuada dictum.
          Lorem ipsum dolor sit amet consectetur sed id massa Lorem ipsum dolor sit amet malesu
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ color: 'white', m: 2, width: '329px', bgcolor: '#2D1964' }}>
      <CardContent>
        <Typography
          sx={{
            // display: 'flex',
            fontFamily: primaryFont,
            fontSize: '10px',
            textAlign: 'right',
            fontWeight: 400,
          }}
        >
          Product:AdVenture Capitalist
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', mt: 3, columnGap: 15 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img
              src="/assets/icons/AvatarCircle.svg"
              alt=""
              style={{ width: '24px', height: '24px' }}
            />
            <Typography sx={{ fontSize: '12px', fontFamily: primaryFont, mt: 1, fontWeight: 600 }}>
              UserName
            </Typography>
          </Box>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Box>
        <Typography sx={{ fontSize: '12px', fontFamily: primaryFont, mt: 1, fontWeight: 300 }}>
          Lorem ipsum dolor sit amet epilobga consec sed id massa morbi porta malesuada dictum.
          Lorem ipsum dolor sit amet consectetur sed id massa Lorem ipsum dolor sit amet malesu
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default ProductReviewCard;
