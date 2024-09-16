/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { ThemeModeColor } from 'src/utils/theme-mode-color';

const NumberInput = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0)); // Prevents negative values
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      //   alignItems="center"
      justifyContent="center"
      sx={{
        width: '70px',
        height: '56px',
        p: '6px',
        border: '1px solid',
        borderRadius: '10px',
      }}
    >
      <Typography mt={0.6} lineHeight={0.5} fontSize="12px" textAlign="left" >
        QTY
      </Typography>
      <TextField
        type="number"
        value={value}
        onChange={handleChange}
        variant="standard"
        InputProps={{
          disableUnderline: true,
          inputProps: { style: { textAlign: 'center', fontSize: '18px' } },
          endAdornment: (
            <InputAdornment position="end">
              <Box display="flex" flexDirection="column">
                <IconButton
                  size="small"
                  onClick={handleIncrement}
                  sx={{ padding: 0, color: ThemeModeColor('#000', '#fff') }}
                >
                  <ExpandLessSharpIcon sx={{ width: '18px', height: '18px' }} />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={handleDecrement}
                  sx={{ padding: 0, color: ThemeModeColor('#000', '#fff') }}
                >
                  <ExpandMoreSharpIcon sx={{ width: '18px', height: '18px' }} />
                </IconButton>
              </Box>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiInputBase-root': {
            color: 'currentcolor',
            fontSize: '24px',
            padding: 0,
            textAlign: 'center',
          },
          '& .MuiInputAdornment-root': {
            marginLeft: 0,
          },
        }}
      />
    </Box>
  );
};

export default NumberInput;
