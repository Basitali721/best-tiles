import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { secondaryFont } from 'src/theme/typography';

// eslint-disable-next-line react/prop-types
const HeaderCell = ({ heading = '' }) => (
  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', my: 8 }}>
    <Divider sx={{ borderColor: 'currentColor', borderTop: '1px', alignSelf: 'center' }} />
    <Box
      sx={{
        boxShadow:
          '2px 1px 9px 6px rgba(255,255,255,0.33), inset 2px 1px 9px 6px rgba(255,255,255,0.33)',
        backdropFilter: 'blur(3.7px)',
        border: '1px solid currentColor',
        py: 1,
        px: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: { md: '48px', sm: '25px', xs: '25px' },
          fontFamily: secondaryFont,
          fontWeight: 400,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          textShadow: '1px -1px 13px #CECECE',
          textTransform: 'capitalize',
        }}
      >
        {heading
          .toLocaleLowerCase()
          .replace(/pc/gi, (match) => match.toUpperCase())
          .replace(/vpns/gi, (match) => match.toUpperCase())}
      </Typography>
    </Box>
    <Divider sx={{ borderColor: 'currentColor', borderTop: '1px', alignSelf: 'center' }} />
  </Box>
);

export default HeaderCell;
