/* eslint-disable react/prop-types */

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { secondaryFont } from 'src/theme/typography';

const CategoriesCard = ({ ele, index }) => (
    <Card
      key={index}
      sx={{
        mt: '30px',
        backgroundImage: `url(${ele.img})`,
        height: { md: '526px', xs: '450px' },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: 'transparent',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: 'none',
        '&:hover': {
          borderColor: 'white',
          boxShadow: '0px 0px 10px 2px rgba(255, 255, 255, 0.5)',
        },
        '&:not(:hover)': {
          borderColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <CardContent
        sx={{
          bgcolor: '#0C0020',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          mt: 40,
          p: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { md: '32px', sm: '25px', xs: '25px' },
            fontFamily: secondaryFont,
            fontWeight: 400,
            color:"#fff"
          }}
        >
          {ele.name}
        </Typography>
      </CardContent>
    </Card>
  );

export default CategoriesCard;
