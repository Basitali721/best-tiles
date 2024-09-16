/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Card, CardContent, Typography, Button, IconButton, Rating } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// eslint-disable-next-line arrow-body-style
const AccountCard = ({ item, index }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        // padding: { xs: 2, md: 5 },
        px:'35px',
        py:'50px',
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
              borderTopLeftRadius: '10px',
              borderBottomRightRadius: '10px',
             px:'22px',
           
            }}
          >
            <Typography sx={{ 
              fontSize: '24px',mt:'5px', fontWeight:500}}>
            {item.discount}
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ p: 0 ,}}>
              <img src="/assets/icons/add-wishlist-icon.svg" alt="" />
            </IconButton>
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
            fontWeight: 400,
          }}
        >
          AdVenture Capitalist
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontStyle: 'italic', fontWeight:400 }}>
          BY ECHO ESPORTS
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            gap: '15px',
            mt: '10px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mt: 2,
              fontSize: ['20px'],
              fontWeight: 600,
              textDecoration: 'line-through',
              textAlign: 'left',
            }}
          >
            $17.99
          </Typography>
          <Box
            sx={{
              px:'33px',
              py:'13px',
              height:'55px',             
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
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: '5px', gap:'4px'}}>
            <Typography
              sx={{
                fontSize: ['20px', '14px'],
                fontWeight: 400,
                textAlign: 'left',
                color:'success.main'
              }}
            >
              Avail The Biggest Discount
            </Typography>
            <Typography
              sx={{
                fontSize: ['20px', '14px'],
                fontWeight: 400,
                textAlign: 'left',
               
              }}
            >
              Before it ends
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt:'2px', ml:2 }}>
            <Typography
              sx={{
                fontSize: ['20px', '16px'],
                fontWeight: 600,
                textAlign: 'left',
               
              }}
            >
              5 Star Rating
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt:1}}>
              <Rating
                name="simple-controlled"
                value={4}
                readOnly
                size="small"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: '22px' }}>
          <Typography sx={{ width: '646px', fontSize:'14px', fontWeight: 400 , lineHeight:'26px' }}>
            {item.span}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '32px',
              marginTop: '15px',
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{
                gap: '12px',
                fontFamily: 'Montserrat',
                fontSize: { xs: '12px', md: '18px' },
                fontWeight: 600,
              }}
            >
              Publish Date:{' '}
              <Typography component="span" fontFamily="Montserrat" fontSize="14px" fontWeight={400}>
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
                fontSize="14px"
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
