/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent, Button, Typography, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { secondaryFont } from 'src/theme/typography';

// eslint-disable-next-line react/prop-types
const CheatStoreCard = ({ stor, index }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      key={index}
    >
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}
      >
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
        <Typography sx={{ fontFamily: secondaryFont }}>{stor.name}</Typography>
        <Rating name="half-rating-read" size="small" defaultValue={2.5} precision={0.5} readOnly />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '10px',
          }}
        >
          (5 Star Rating)
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 200, textAlign: 'center', opacity: 0.8 }}>
          {stor.para}
        </Typography>
        <Button
          onClick={() => navigate('/seller-profile')}
          variant="contained"
          color="primary"
          size="medium"
          sx={{ textAlign: 'center', fontWeight: 600, '&:hover': { background: '#b23751' } }}
        >
          {stor.button}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CheatStoreCard;
