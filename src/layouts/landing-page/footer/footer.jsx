/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
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
        <Typography fontSize='25px' >
        شغل جبس بورد دولاب اسمنٹ بورد شغل دھان شغل عازل شغل بلاط شغل 
        بدیل رخام خشب رخام شغل فوم شغل کھربا سباک
        </Typography>
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
            <img src="/assets/logo-company.png" alt="" width='60%' />
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} order={{ xs: 3, sm: 3 }}>
          <Box width="max-content" ml={{ sm: 'auto', xs: 'unset' }}>
            <Typography variant="h4" fontFamily={secondaryFont}>
            اتصل بنا
            </Typography>
            <Box my={3}>
              <Typography mb={1} fontSize='25px' fontWeight={500}>
              اسم المالك : زوهب
              </Typography>
              <Typography mb={1} fontSize='25px' fontWeight={500}>
              موقع: حائل 
              </Typography>
              <Typography mb={0.5} fontSize='20px' fontWeight={500}>
             <span style={{fontSize:"25px"}}> رقم التليفون : </span> 0591598078
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
