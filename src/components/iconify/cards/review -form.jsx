/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography, Rating } from '@mui/material';
import { primaryFont, secondaryFont } from 'src/theme/typography';
import { success } from 'src/theme/palette';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Review:', review);
    setName('');
    setReview('');
  };

  return (
    <Card sx={{ px: { md: 10, xs: 2 }, pb: { md: 5, xs: 2 }, mt: 5 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: { xs: '24px', md: '50px' },
            fontWeight: 400,
            marginTop: 5,
            mb: 8,
            textAlign: 'center',
            fontFamily: secondaryFont,
            textShadow: '1px -1px 13px #CECECE',
          }}
        >
          Write your Review
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" sx={{ gap: 3 }}>
            <TextField
              label="Name"
              variant="outlined"
              border="2px solid white"
              value={name}
              onChange={(event) => setName(event.target.value)}
              InputProps={{
                endAdornment: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M6.44438 1.17524C7.20084 0.669785 8.09021 0.4 9 0.4C10.22 0.4 11.39 0.884641 12.2527 1.74731C13.1154 2.60998 13.6 3.78 13.6 5C13.6 5.90979 13.3302 6.79916 12.8248 7.55562C12.3193 8.31209 11.6009 8.90168 10.7603 9.24985C9.9198 9.59801 8.9949 9.68911 8.10258 9.51161C7.21027 9.33412 6.39063 8.89601 5.74731 8.25269C5.10399 7.60937 4.66588 6.78973 4.48839 5.89742C4.3109 5.0051 4.40199 4.0802 4.75015 3.23966C5.09832 2.39912 5.68791 1.68069 6.44438 1.17524ZM7.11106 7.827C7.67019 8.20059 8.32754 8.4 9 8.4C9.90174 8.4 10.7665 8.04179 11.4042 7.40416C12.0418 6.76654 12.4 5.90174 12.4 5C12.4 4.32754 12.2006 3.67019 11.827 3.11106C11.4534 2.55193 10.9224 2.11615 10.3011 1.85881C9.67985 1.60147 8.99623 1.53414 8.33669 1.66533C7.67716 1.79652 7.07134 2.12034 6.59584 2.59584C6.12034 3.07134 5.79652 3.67716 5.66533 4.33669C5.53414 4.99623 5.60147 5.67985 5.85881 6.30112C6.11615 6.92239 6.55193 7.4534 7.11106 7.827ZM17.6 18V18.6H16.4V18C16.4 16.5678 15.8311 15.1943 14.8184 14.1816C13.8057 13.1689 12.4322 12.6 11 12.6H7C5.56783 12.6 4.19432 13.1689 3.18162 14.1816C2.16893 15.1943 1.6 16.5678 1.6 18V18.6H0.4V18C0.4 16.2496 1.09536 14.5708 2.3331 13.3331C3.57084 12.0954 5.24957 11.4 7 11.4H11C12.7504 11.4 14.4292 12.0954 15.6669 13.3331C16.9046 14.5708 17.6 16.2496 17.6 18Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.1"
                    />
                  </svg>
                ),
              }}
            />
            <TextField
              label="Review"
              variant="outlined"
              multiline
              rows={4}
              value={review}
              onChange={(event) => setReview(event.target.value)}
              InputProps={{
                endAdornment: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.05 8.33333C0.05 8.17695 0.176948 8.05 0.333333 8.05H7.66667C7.82305 8.05 7.95 8.17695 7.95 8.33333C7.95 8.48972 7.82305 8.61667 7.66667 8.61667H0.333333C0.176948 8.61667 0.05 8.48972 0.05 8.33333ZM0.333333 12.05H9.66667C9.82305 12.05 9.95 12.1769 9.95 12.3333C9.95 12.4897 9.82305 12.6167 9.66667 12.6167H0.333333C0.176948 12.6167 0.05 12.4897 0.05 12.3333C0.05 12.1769 0.176948 12.05 0.333333 12.05ZM0.333333 14.05H7.66667C7.82305 14.05 7.95 14.1769 7.95 14.3333C7.95 14.4897 7.82305 14.6167 7.66667 14.6167H0.333333C0.176948 14.6167 0.05 14.4897 0.05 14.3333C0.05 14.1769 0.176948 14.05 0.333333 14.05ZM15.95 13.6667C15.95 14.9257 14.9257 15.95 13.6667 15.95C12.4076 15.95 11.3833 14.9257 11.3833 13.6667C11.3833 12.4076 12.4076 11.3833 13.6667 11.3833C14.9257 11.3833 15.95 12.4076 15.95 13.6667ZM15.3833 13.6667C15.3833 12.7204 14.6136 11.95 13.6667 11.95C12.7197 11.95 11.95 12.7204 11.95 13.6667C11.95 14.6129 12.7197 15.3833 13.6667 15.3833C14.6136 15.3833 15.3833 14.6129 15.3833 13.6667ZM15.95 2.33333V3C15.95 3.52372 15.5237 3.95 15 3.95H1C0.476281 3.95 0.05 3.52372 0.05 3V2.33333C0.05 1.07428 1.07428 0.05 2.33333 0.05H13.6667C14.9257 0.05 15.95 1.07428 15.95 2.33333ZM15.3833 2.33333C15.3833 1.38707 14.6136 0.616667 13.6667 0.616667H2.33333C1.38637 0.616667 0.616667 1.38707 0.616667 2.33333V3C0.616667 3.21168 0.789117 3.38333 1 3.38333H15C15.2109 3.38333 15.3833 3.21168 15.3833 3V2.33333ZM15.95 7.66667C15.95 8.92572 14.9257 9.95 13.6667 9.95C12.4076 9.95 11.3833 8.92572 11.3833 7.66667C11.3833 6.40761 12.4076 5.38333 13.6667 5.38333C14.9257 5.38333 15.95 6.40761 15.95 7.66667ZM15.3833 7.66667C15.3833 6.7204 14.6136 5.95 13.6667 5.95C12.7197 5.95 11.95 6.7204 11.95 7.66667C11.95 8.61294 12.7197 9.38333 13.6667 9.38333C14.6136 9.38333 15.3833 8.61294 15.3833 7.66667ZM0.333333 6.05H9.66667C9.82305 6.05 9.95 6.17695 9.95 6.33333C9.95 6.48972 9.82305 6.61667 9.66667 6.61667H0.333333C0.176948 6.61667 0.05 6.48972 0.05 6.33333C0.05 6.17695 0.176948 6.05 0.333333 6.05Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.1"
                    />
                  </svg>
                ),
              }}
            />
          </Box>
          <Box
            mt={2}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
              mt: 2,
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontFamily: primaryFont }}>Choose your Rating:</Typography>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                sx={{ color: success.main, fontSize: '24px', fontWeight: 500 }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ px: { md: '73px', xs: '32px' } }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
