/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// eslint-disable-next-line arrow-body-style
const AccountCard = ({ item, index }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        padding: { xs: 2, md: 5 },
        borderRadius: '10px',
        gap: 4,
        mt: 10,
      }}
      key={index}
    >
      <Box
        component="div"
        sx={{
          backgroundImage: `url(${item.img})`,
          backgroundPosition: 'absolute',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'transform 0.2s ease-in-out',
          borderRadius: '10px',
          height: { xs: '500px', md: '516px' },
          width: { xs: '450px', md: '450px' },
          display: 'flex',
          justifyContent: 'start',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            component="div"
            sx={{
              width: '175px',
              height: '43px',
              backgroundColor: '#20D598',
              fontFamily: 'Montserrat',
              fontSize: '24px',
              fontWeight: 500,
              color: 'white',
              right: '8px',
              marginTop: '.5px',
              borderTopLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              padding: '5px 8px',
            }}
          >
            {item.discount}
          </Box>
          <Box
            component="div"
            sx={{
              width: '39px',
              height: '39px',
              backgroundColor: '#3E228B',
              borderRadius: '10px',
              padding: '2px',
              '&:hover': {
                backgroundColor: '#231645',
              },
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
          </Box>
        </Box>
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: '28px', md: '40px' },
            marginBottom: '6px',
          }}
        >
          AdVenture Capitalist
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontStyle: 'italic' }}>
          BY ECHO ESPORTS
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            gap: 5,
            mt: '10px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mt: 2,
              fontSize: ['20px', '22px'],
              fontWeight: 600,
              textDecoration: 'line-through',
              textAlign: 'left',
            }}
          >
            $17.99
          </Typography>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#3E228B',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: ['20px', '22px'],
                fontWeight: 600,
              }}
            >
              $13.99
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
            <Typography
              sx={{
                fontSize: ['20px', '14px'],
                fontWeight: 400,
                textAlign: 'left',
              }}
            >
              Avail The Biggest Discount
            </Typography>
            <Typography
              sx={{
                fontSize: ['20px', '14px'],
                fontWeight: 400,
                textAlign: 'left',
                mt: 1,
              }}
            >
              Before it ends
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontSize: ['20px', '14px'],
                fontWeight: 400,
                textAlign: 'left',
                mt: 2,
              }}
            >
              5 Star Rating
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
              <Typography
                sx={{
                  fontSize: ['20px', '11px'],
                  fontWeight: 400,
                  textAlign: 'left',
                }}
              >
                ⭐⭐⭐⭐⭐
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: '15px' }}>
          <Typography sx={{ width: '646px', fontFamily: 'Montserrat', fontWeight: '400' }}>
            {item.span}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '10px',
              marginTop: '15px',
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{
                gap: 3,
                fontFamily: 'Montserrat',
                fontSize: { xs: '12px', md: '18px' },
                fontWeight: 600,
              }}
            >
              Publish Date:{' '}
              <Typography component="span" fontFamily="Montserrat" fontSize="12px" fontWeight={400}>
                Feb 15 2023
              </Typography>
            </Typography>
            <Typography
              component="h2"
              variant="h6"
              color="white"
              sx={{
                gap: '3px',
                fontFamily: 'Montserrat',
                fontSize: { xs: '12px', md: '18px' },
                fontWeight: 600,
              }}
            >
              Number of Accounts Available:{' '}
              <Typography
                component="span"
                color="white"
                fontFamily="Montserrat"
                fontSize="12px"
                fontWeight={400}
              >
                7
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '10px',
              marginTop: '8px',
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{
                gap: 3,
                fontFamily: 'Montserrat',
                fontSize: { xs: '12px', md: '18px' },
                mt: 2,
                fontWeight: 600,
              }}
            >
              Status:{' '}
              <img src="/assets/icons/Ellipse42.svg" alt="" style={{ marginTop: '-20px' }} />
              <Typography
                component="span"
                fontFamily="Montserrat"
                fontSize="12px"
                fontWeight={400}
                sx={{ color: 'success.main', ml: 1 }}
              >
                Working
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
              marginTop: '8px',
            }}
          >
            <Box
              sx={{
                height: '44px',
                borderRadius: '10px',
                padding: '3px 10px',
                border: '1px solid white',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '11px',
                  marginTop: '1px',
                  fontFamily: 'Montserrat',
                  fontWeight: 300,
                }}
              >
                QTY
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  marginTop: '-3px',
                  fontFamily: 'Montserrat',
                  fontWeight: 300,
                }}
              >
                2
              </Typography>
            </Box>

            <Button
              sx={{
                backgroundColor: 'success.main',
                width: { xs: '100%', md: '170px' },
                padding: '8px 6px',
                borderRadius: '10px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#408e74',
                },
              }}
            >
              {item.button}
            </Button>

            <Button
              sx={{
                backgroundColor: 'primary.main',
                width: { xs: '100%', md: '170px' },
                padding: '8px 6px',
                borderRadius: '10px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#b23751',
                },
              }}
            >
              {item.button}
            </Button>

            <Box
              sx={{
                height: '39px',
                backgroundColor: '#20D598',
                padding: '5px 5px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <img src="/assets/icons/msg.svg" alt="" />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
