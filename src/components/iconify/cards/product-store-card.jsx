import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { secondaryFont } from 'src/theme/typography';

const ProductStoreCard = () => (
  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
    <Typography
      sx={{
        fontSize: '28px',
        fontWeight: 400,
        textShadow: '1px -1px 13px #CECECE',
        fontFamily: secondaryFont,
      }}
    >
      All Products
    </Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        variant="contained"
        color="success"
        fontFamily="Montserrat"
        size="medium"
        sx={{ px: '28px' }}
      >
        Follow
      </Button>
      <Button
        variant="contained"
        color="primary"
        fontFamily="Montserrat"
        
        sx={{px:'28px', py:'10px',  fontSize:'16px', fontWeight:600, height:'40px' }}
      >
        ChatNow
      </Button>
      <img src="/assets/icons/i-chat.svg" alt="" />
    </Box>
  </Box>
);

export default ProductStoreCard;
