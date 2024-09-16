import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const GlobalDropdown = () => {
  const [sortValue, setSortValue] = useState('');
  return (
    <Select
      size="small"
      sx={{
        fontSize: '16px',
        border: 'none',
        color: 'white',
        fontWeight: 600,
        '& .MuiSvgIcon-root': { color: 'white' },
        backgroundColor: 'success.main',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
      value={sortValue}
      onChange={(e) => setSortValue(e.target.value)}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="" disabled>
        Jan 2024
      </MenuItem>
      <MenuItem value={10}>Feb 2024</MenuItem>
      <MenuItem value={10}>Mar 2024</MenuItem>
      <MenuItem value={10}>Apr 2024</MenuItem>
      <MenuItem value={10}>May 2024</MenuItem>
    </Select>
  );
};

export default GlobalDropdown;
