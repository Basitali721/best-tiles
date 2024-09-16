/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Button, Typography, Card, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SponsoredCard = ({ item, index }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',

        p: '25px',
        // gap: '16px',
      }}
      key={index}
    >
      {/* <CardContent> */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          gap: '10px',
        }}
      >
        <Box flexShrink={0} width={{ md: '120px', xs: '80px' }}>
          <img width="100%" height="100%" style={{ objectFit: 'cover' }} src={item.img} alt="" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '25px',
            marginLeft: '20px',
            gap: '12px',
          }}
        >
          <Typography
            sx={{
              fontSize: { md: '20px' },
              fontWeight: 500,
              textAlign: 'left',
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: '14px' },

              fontWeight: 300,
              opacity: 0.8,
              textAlign: 'left',
            }}
          >
            {item.para}
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
                fontSize: '8px',
              }}
            >
              (5 Star Rating)
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box mt={3.8} display="flex" justifyContent="center" gap={1.5}>
        <Button
          onClick={() => navigate('/seller-profile')}
          variant="contained"
          sx={{
            width: '130px',
            borderRadius: '10px',
            height: '40px',
            boxShadow: 'none',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#b23751',
            },
          }}
        >
          {item.button}
        </Button>
        <Button
          variant="contained"
          color="success"
          size="medium"
          sx={{
            width: '130px',
            height: '40px',
            fontWeight: 600,
            boxShadow: 'none',
          }}
        >
          Follow
        </Button>
      </Box>
      {/* </CardContent> */}
    </Card>
  );
};

export default SponsoredCard;
