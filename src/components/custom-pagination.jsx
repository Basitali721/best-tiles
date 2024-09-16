import { Pagination, PaginationItem, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { ThemeModeColor } from 'src/utils/theme-mode-color';

const CustomPagination = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Pagination
      size={matches ? 'medium' : 'small'}
      sx={{
        '& .MuiPaginationItem-root': {
          border: '1px solid rgba(87, 93, 255, 0.50)',
          background: ThemeModeColor('#fff', '#1F143D'),
          color: ThemeModeColor('#000', '#fff'),
        },
        '& .Mui-selected': {
          color: '#fff !important',
          backgroundColor: '#1979C3 !important',
          border: '1px solid #1979C3 !important',
        },
      }}
      renderItem={(item) => (
        <PaginationItem
          sx={{ color: '#fff' }}
          slots={{
            previous: () => (
              <Typography variant="label" sx={{ padding: '0 6px', fontWeight: 600 }}>
                Prev
              </Typography>
            ),
            next: () => (
              <Typography variant="label" sx={{ padding: '0 6px', fontWeight: 600 }}>
                Next
              </Typography>
            ),
          }}
          {...item}
        />
      )}
      count={10}
      variant="outlined"
      color="info"
    />
  );
};

export default CustomPagination;
