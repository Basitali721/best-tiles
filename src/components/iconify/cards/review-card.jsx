/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';
import { ThemeModeColor } from 'src/utils/theme-mode-color';

const ReviewCard = ({ review, index }) => (
  <Card sx={{ bgcolor: ThemeModeColor('#CDC2EB', '#2D1964') }}>
    <CardContent>
      <Typography
        sx={{
          fontSize: '10px',
          textAlign: 'right',
        }}
      >
        Product: <span style={{ fontWeight: 600 }}>AdVenture Capitalist</span>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img
            src="/assets/icons/AvatarCircle.svg"
            alt=""
            style={{ width: '24px', height: '24px' }}
          />
          <Typography sx={{ fontSize: '12px', mt: 1, fontWeight: 600 }}>UserName</Typography>
        </Box>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="small" />
      </Box>
      <Typography sx={{ fontSize: '12px', mt: 1, fontWeight: 300 }}>
        {review?.reviewText}
      </Typography>
      {review?.sellerReply && (
        <>
          <Typography sx={{ fontSize: '12px', mt: 2, fontWeight: 600 }}>Seller Reply</Typography>
          <Typography sx={{ fontSize: '12px', mt: 2, fontWeight: 300 }}>
            Lorem ipsum dolor sit amet epilobga consec sed id massa morbi porta malesuada dictum.
            Lorem ipsum dolor sit amet consectetur sed id massa Lorem ipsum dolor sit amet malesu
          </Typography>
        </>
      )}
    </CardContent>
  </Card>
);

export default ReviewCard;
