/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeModeColor } from 'src/utils/theme-mode-color';

const GlobalButton = ({ navigationRoute }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        onClick={() => navigate(navigationRoute)}
        variant="contained"
        sx={{
          color: ThemeModeColor('#0C0020', '#fff'),
          backgroundColor: ThemeModeColor('#CDC2EB59', '#0C0020'),
          px: '100px',
          py: '12px',
          fontSize: '24px',
          fontWeight: 600,
          border: '1px solid gray',
          '&:hover': {
            background: ThemeModeColor('#CDC2EB59', '#0C0020'),
          },
        }}
      >
        View All
      </Button>
    </Box>
  );
};

export default GlobalButton;
