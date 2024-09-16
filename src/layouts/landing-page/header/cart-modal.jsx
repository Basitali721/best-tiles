/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { shoppingcart } from 'src/_mock/AccountData';
// import ShoppingCartComponent from 'src/components/shopping-cart-component';
import { primaryFont, secondaryFont } from 'src/theme/typography';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeModeColor } from 'src/utils/theme-mode-color';
import { useNavigate } from 'react-router-dom';

const CartModal = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="cart-modal"
      aria-describedby="cart-description"
      scroll="paper"
      PaperProps={{
        sx: {
          position: 'absolute',
          top: 0,
          right: 0,
          background: ThemeModeColor('#eeeaf8', '#0C0020'),
          color: ThemeModeColor('#000', '#fff'),
          margin: 0,
          borderRadius: 0,
          boxShadow: '-5px 0px 17px 0px rgba(101, 101, 101, 0.25)',
          border: '1px solid currentColor',
          maxHeight: '100%',
          minHeight: '100%',
          width: { sm: '480px', xs: '100%' },
        },
      }}
    >
      <DialogTitle sx={{ m: 0, px: { md: 5, xs: 2.5 } }} id="cart-dialog-title">
        <Typography
          sx={{
            fontSize: '30px',
            fontFamily: secondaryFont,
            textShadow: '1px -1px 13px #CECECE',
          }}
        >
          Your Cart{' '}
          <span style={{ fontSize: '18px', fontWeight: 300, fontFamily: primaryFont }}>(3)</span>
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => setOpen(false)}
        sx={{
          position: 'absolute',
          right: 24,
          top: 16,
          color: 'currentcolor',
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          px: { md: 5, xs: 2.5 },
        }}
      >
        {shoppingcart.map((item, index) => (
          <Box key={index} sx={{ mb: '20px' }}>
            {/* <ShoppingCartComponent isCartModal item={item} /> */}
          </Box>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 400,
              mt: '5px',
            }}
          >
            Subtotal
          </Typography>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 400,
              mt: '5px',
            }}
          >
            $29.78
          </Typography>
        </Box>
        <Divider sx={{ mt: '20px' }} />
      </DialogContent>
      <DialogActions sx={{ p: 0 }}>
        <Stack mt={2} mb={3} alignItems="center" gap={2.5} width={1} top={0}>
          <Button
            onClick={() => {
              navigate('/cart');
              setOpen(false);
            }}
            sx={{
              backgroundColor: 'success.main',
              width: { xs: '80%', md: '280px' },
              py: '15px',
              borderRadius: '10px',
              height: '56px',
              fontSize: '18px',
              fontWeight: 600,
              color: 'white',

              '&:hover': {
                backgroundColor: '#408e74',
              },
            }}
          >
            View Cart
          </Button>
          <Button
            onClick={() => {
              navigate('/checkout');
              setOpen(false);
            }}
            sx={{
              backgroundColor: 'primary.main',
              width: { xs: '80%', md: '280px' },
              py: '15px',
              borderRadius: '10px',
              height: '56px',
              fontSize: '18px',
              fontWeight: 600,
              color: 'white',

              '&:hover': {
                backgroundColor: '#b23751',
              },
            }}
          >
            Proceed to Checkout
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default CartModal;
