import PropTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { RouterLink } from 'src/routes/components';

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = useMemo(
    () => (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 200,
          height: 'auto',
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <img width="100%" height="auto" src="/assets/logo.svg" alt="Logo" />
      </Box>
    ),
    [sx, other, ref]
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
