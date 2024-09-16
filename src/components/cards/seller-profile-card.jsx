import { Box, Button, Rating, Typography } from '@mui/material';
import React from 'react';
import { primaryFont, secondaryFont } from 'src/theme/typography';

const SellerProfileCard = () => (
  <>
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
      <Button
        variant="contained"
        color="success"
        size="medium"
        sx={{ textAlign: 'center', px: '28px' }}
      >
        Follow
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        sx={{ textAlign: 'center', px: '28px' }}
      >
        Chat Now
      </Button>
      <img src="/assets/icons/i-chat.svg" alt="" />
    </Box>
    <Box sx={{ display: 'flex', gap: 6 }}>
      <img src="/assets/images/seller-profile1.png" alt="" />
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 5 }}>
        <Typography
          sx={{
            fontSize: '28px',
            fontWeight: 400,
            textShadow: '1px -1px 13px #CECECE',
            fontFamily: secondaryFont,
          }}
        >
          Pixel Pioneers
        </Typography>
        <Typography sx={{ fontFamily: primaryFont, fontWeight: 300, fontSize: '14px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, tortor sed luctus
          vehicula, nisi risus pretium turpis, vel varius magna nulla a diam. Ut lacinia ipsum id
          luctus fermentum. Phasellus eget libero eu mauris suscipit hendrerit. Sed aliquam libero
          in ligula euismod bibendum. Vivamus consectetur est et nisi consequat, a suscipit urna
          cursus. Vestibulum non justo nec lectus pretium varius. Sed posuere justo nec massa
          vehicula, et gravida ex sodales. Nulla facilisi. Integer pretium nulla vel sem tincidunt{' '}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box display={{ display: 'flex', gap: 14 }}>
            <img src="/assets/icons/git.svg" alt="" />
            <img src="/assets/icons/telegram.svg" alt="" />
            <img src="/assets/icons/insta.svg" alt="" />
            <img src="/assets/icons/twitter.svg" alt="" />
            <img src="/assets/icons/youtube.svg" alt="" />
          </Box>
          <Rating />
        </Box>
      </Box>
    </Box>
  </>
);

export default SellerProfileCard;
