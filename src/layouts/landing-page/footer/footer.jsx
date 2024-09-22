/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { secondaryFont } from 'src/theme/typography';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Box
    position="relative"
    sx={{ background: (theme) => theme.palette.background.default }}
    pt={6}
    mt={20}
    borderRadius="10px 10px 0 0"
    zIndex={1}
    pb={3}
  >
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} order={{ xs: 2, sm: 1 }}>
          <Typography variant="h4" fontFamily={secondaryFont}>
            عن شركتنا
          </Typography>
          <Box my={3}>
            <Typography fontSize="25px">
              شغل جبس بورد دولاب اسمنٹ بورد شغل دھان شغل عازل شغل بلاط شغل بدیل رخام خشب رخام شغل
              فوم شغل کھربا سباک
            </Typography>
          </Box>
          <Box>
            <IconButton
              component="a"
              href="https://www.facebook.com/profile.php?id=61566337434927"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M17.75 3.59375C16.2167 3.59375 14.7462 4.20284 13.662 5.28704C12.5778 6.37123 11.9687 7.84172 11.9687 9.375V12.5938H8.875C8.71967 12.5938 8.59375 12.7197 8.59375 12.875V17.125C8.59375 17.2803 8.71967 17.4062 8.875 17.4062H11.9687V26.125C11.9687 26.2803 12.0947 26.4062 12.25 26.4062H16.5C16.6553 26.4062 16.7812 26.2803 16.7812 26.125V17.4062H19.9024C20.0315 17.4062 20.144 17.3184 20.1753 17.1932L21.2378 12.9432C21.2821 12.7657 21.1479 12.5938 20.9649 12.5938H16.7812V9.375C16.7812 9.11807 16.8833 8.87167 17.065 8.68999C17.2467 8.50831 17.4931 8.40625 17.75 8.40625H21C21.1553 8.40625 21.2812 8.28033 21.2812 8.125V3.875C21.2812 3.71967 21.1553 3.59375 21 3.59375H17.75Z"
                  fill="#fff"
                />
              </svg>
            </IconButton>

            <IconButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M14.9999 10.9375C12.7562 10.9375 10.9374 12.7563 10.9374 15C10.9374 17.2437 12.7562 19.0625 14.9999 19.0625C17.2435 19.0625 19.0624 17.2437 19.0624 15C19.0624 12.7563 17.2435 10.9375 14.9999 10.9375Z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.46178 3.85183C12.7719 3.37011 17.2278 3.37011 21.538 3.85183C23.911 4.11705 25.825 5.98677 26.1035 8.36809C26.6188 12.7743 26.6188 17.2256 26.1035 21.6319C25.825 24.0132 23.911 25.8829 21.538 26.1482C17.2278 26.6299 12.7719 26.6299 8.46179 26.1482C6.08879 25.8829 4.1748 24.0132 3.89628 21.6319C3.38093 17.2256 3.38093 12.7743 3.89628 8.36809C4.1748 5.98677 6.08879 4.11705 8.46178 3.85183ZM21.2499 7.5C20.5595 7.5 19.9999 8.05964 19.9999 8.75C19.9999 9.44035 20.5595 10 21.2499 10C21.9402 10 22.4999 9.44035 22.4999 8.75C22.4999 8.05964 21.9402 7.5 21.2499 7.5ZM9.06236 15C9.06236 11.7208 11.7207 9.0625 14.9999 9.0625C18.2791 9.0625 20.9374 11.7208 20.9374 15C20.9374 18.2792 18.2791 20.9375 14.9999 20.9375C11.7207 20.9375 9.06236 18.2792 9.06236 15Z"
                  fill="#fff"
                />
              </svg>
            </IconButton>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          order={{ xs: 1, sm: 2 }}
          textAlign={{ md: 'center', sm: 'left' }}
          mt={{ md: 5.3, xs: 0 }}
        >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <img src="/assets/logo-company.png" alt="" width="60%" />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} order={{ xs: 3, sm: 3 }}>
          <Box width="max-content" ml={{ sm: 'auto', xs: 'unset' }}>
            <Typography variant="h4" fontFamily={secondaryFont}>
              اتصل بنا
            </Typography>
            <Box my={3}>
              <Typography mb={1} fontSize="25px" fontWeight={500}>
                اسم المالك : زوهب
              </Typography>
              <Typography mb={1} fontSize="25px" fontWeight={500}>
                موقع: حائل
              </Typography>
              <Typography mb={0.5} fontSize="20px" fontWeight={500}>
                <span style={{ fontSize: '25px' }}> رقم التليفون : </span> 0591598078
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
