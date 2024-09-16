import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

// import { Typography } from '@mui/material';
// import { secondaryFont } from 'src/theme/typography';
import Header from 'src/layouts/landing-page/header/header';
import { ThemeModeColor } from 'src/utils/theme-mode-color';
import Footer from './footer/footer';
// import Nav from './header/nav';

// ----------------------------------------------------------------------

export default function LandingPageLayout({ children }) {
  // const [openNav, setOpenNav] = useState(false);
  const [ setOpenNav] = useState(false);


  return (
    // <>
    //   <AnnouncementBar />
    //   <Header onOpenNav={() => setOpenNav(true)} />
    //   <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

    //   <Box minHeight={0.5}>{children}</Box>
    //   <Footer />
    // </>
    <>
      <Box bgcolor={ThemeModeColor("#fff","#1F143D")} pb={2}>
        {/* <AnnouncementBar /> */}
        <Header onOpenNav={() => setOpenNav(true)} />
        {/* <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} /> */}
      </Box>

      <Box  >
        {children}
      </Box>
      <Footer />
    </>
  );
}

LandingPageLayout.propTypes = {
  children: PropTypes.node,
};
