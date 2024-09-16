/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '@mui/material';

const ProductCard = ({ item, index, cardBgColor }) => 
  // console.log(item);

   (
    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} gap={1}>
        <Box
          sx={{
            transition: 'transform 0.2s ease-in-out',
            borderRadius: '10px',
            height: 300,
            ':hover': {
              transform: 'scale(1.04)',
            },
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '10px' }}
            src={item.img}
            alt=""
          />
        </Box>
      </Box>
    </Box>
  )
;

export default ProductCard;
