/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button, Typography } from '@mui/material';
import { secondaryFont } from 'src/theme/typography';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PopularStoreCard = ({ stor, index }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        py: '24px',
        px: '36px',
        gap: '15px',
      }}
      key={index}
    >
      {/* <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}> */}
      <img
        src={stor.img}
        alt=""
        style={{
          bgcolor: '#1F143D',
          //   height: '66px',
          //   width: '66px',
          borderRadius: '50%',
          alignSelf: 'center',
        }}
      />
      <Typography sx={{ textAlign: 'center', fontSize: '18px', fontFamily: secondaryFont }}>
        {stor.name}
      </Typography>
      <Typography sx={{ fontWeight: 200, textAlign: 'center', opacity: 0.8, fontSize: '12px' }}>
        {stor.para}
      </Typography>
      <Button
        onClick={() => navigate('/seller-profile')}
        variant="contained"
        color="primary"
        sx={{
          boxShadow: 'none',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#b23751',
          },
        }}
      >
        {stor.button}
      </Button>
      {/* </CardContent> */}
    </Card>
  );
};

export default PopularStoreCard;
