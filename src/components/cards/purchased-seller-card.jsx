/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Button, Card, Box } from '@mui/material';
import { secondaryFont } from 'src/theme/typography';
import { ThemeModeColor } from 'src/utils/theme-mode-color';
import { Link, useNavigate } from 'react-router-dom';
// import { ThemeModeColor } from 'src/utils/theme-mode-color';
const PurchasedSellerCard = ({ stor, index, cardBgColor }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        py: '14px',
        px: '12px',
        gap: '15px',
        background: ThemeModeColor('#CDC2EB59', '#1F143D'),
        height: '100%',
      }}
      key={index}
    >
      {/* <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}> */}
      <img
        src={stor.img}
        alt=""
        style={{
          borderRadius: '50%',
          width: '29px',
          height: '29px',
          alignSelf: 'center',
        }}
      />
      <Typography sx={{ textAlign: 'center', fontSize: '12px', fontFamily: secondaryFont }}>
        {stor.name}
      </Typography>

      <Box display="flex" gap="8px" justifyContent="center">
        <Button
          onClick={() => navigate('/seller-profile')}
          variant="contained"
          color="primary"
          sx={{
            boxShadow: 'none',
            fontWeight: 600,
            fontSize: '10px',
            width: 1,
            px: 0.5,
          }}
        >
          {stor.button}
        </Button>

        {/* <img src="/assets/icons/messages-notfi.svg" alt="" /> */}
        <Link to="/customer/messages">
          <Box sx={{ cursor: 'pointer' }}>
            <Button
              variant="contained"
              color="success"
              sx={{
                p: '5px',

                minWidth: 'auto',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '27px',
                height: '27px',
              }}
            >
              <img
                src={
                  stor.hasMessage
                    ? '/assets/icons/Group-messages.svg'
                    : '/assets/icons/Group-msg-notif.svg'
                }
                alt="Messages"
                style={{ width: '25px', height: '25px' }}
              />
            </Button>
          </Box>
        </Link>
      </Box>
      {/* </CardContent> */}
    </Card>
  );
};

export default PurchasedSellerCard;
