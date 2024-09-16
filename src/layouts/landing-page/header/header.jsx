/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
// import CartModal from './cart-modal';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Adjust for fixed header height
    const headerHeight = document.querySelector('header').offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
const Header = () => (
  <Container sx={{ marginTop: { md: '10px', xs: '10px' } }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Box width={{ lg: '200px', md: '180px', xs: '120px' }}>
      <Link to="/">
        <img width="100%" src="/assets/logo-company.png" alt="" />
      </Link>
    </Box>
    <Box>

    
    <Button onClick={() => {  scrollToSection('best-selling'); }} sx={{ color: '#fff',fontSize:"20px" }}>الأكثر مبيعا</Button>
    <Button onClick={() => {  scrollToSection('about-us'); }} sx={{ color: '#fff',fontSize:"20px" }}>فئات</Button>
    </Box>
    </Box>
  </Container>
);

export default Header;
