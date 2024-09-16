/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
// import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

// import { account } from 'src/_mock/account';

import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';

import { Container, IconButton } from '@mui/material';
import { ThemeModeColor } from 'src/utils/theme-mode-color';
import { useNavigate } from 'react-router-dom';
import { secondaryFont } from 'src/theme/typography';
import { NAV } from '../config-layout';
import navConfig from '../config-navigation';

// ----------------------------------------------------------------------

const categories = [
  'ACCOUNTS',
  'GUIDES',
  'CONSOLE/PC SERVICES',
  'GRAPHICS DESIGNS',
  'PROXIES',
  'VPNS',
  'WEB DEVELOPERS',
  'ALL',
];
export default function Nav({ openNav, onCloseNav }) {
  const [showCategoriesBar, setShowCategoriesBar] = useState(true);

  const navigate = useNavigate();
  const { pathname } = usePathname();

  const upMd = useResponsive('up', 'md');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    if (pathname === '/seller-profile') {
      setShowCategoriesBar(false);
    } else setShowCategoriesBar(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // const renderAccount = (
  //   <Box
  //     sx={{
  //       my: 3,
  //       mx: 2.5,
  //       py: 2,
  //       px: 2.5,
  //       display: 'flex',
  //       borderRadius: 1.5,
  //       alignItems: 'center',
  //       bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
  //     }}
  //   >
  //     <Avatar src={account.photoURL} alt="photoURL" />

  //     <Box sx={{ ml: 2 }}>
  //       <Typography variant="subtitle2">{account.displayName}</Typography>

  //       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  //         {account.role}
  //       </Typography>
  //     </Box>
  //   </Box>
  // );

  const renderMenu = (
    <Stack component="nav" spacing={0.2} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem onCloseNav={onCloseNav} key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ my: 3, ml: 3 }} />

      {/* {renderAccount} */}

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Container>
      {upMd ? (
        showCategoriesBar ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              mt: '30px',
              width: 1,
            }}
          >
            {categories.map((heading, index) => (
              <Box key={index}>
                <Typography
                  onClick={() => navigate(`/category-details?name=${heading}`)}
                  sx={{
                    fontSize: '18px', // Set your custom font size here
                    color: ThemeModeColor('#000', '#fff'),
                    cursor: 'pointer',
                    fontFamily: secondaryFont,
                    transition: 'text-shadow 0.3s',

                    textShadow: '0 0 9px transparent, 0 0 9px transparent, 0 0 9px transparent',
                    '&:hover': {
                      textShadow:
                        '0 0 9px rgba(0, 191, 255, 0.5), 0 0 9px rgba(255, 255, 255, 0.7), 0 0 9px rgba(0, 191, 255, 0.8)',
                    },
                    minWidth: 'max-content',
                  }}
                >
                  {heading}
                </Typography>
              </Box>
            ))}

            {pathname === '/seller-profile' && (
              <IconButton
                disableFocusRipple
                disableRipple
                onClick={() => setShowCategoriesBar(false)}
                size="small"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M13.502 13.3096L8.10804 7.90777C7.77332 7.57257 7.77332 7.02903 8.10804 6.69382L13.502 1.29199"
                    stroke={ThemeModeColor('#000', '#fff')}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.64453 13.3096L1.25062 7.90777C0.915903 7.57257 0.915903 7.02903 1.25062 6.69382L6.64453 1.29199"
                    stroke={ThemeModeColor('#000', '#fff')}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
            )}
          </Box>
        ) : (
          <IconButton
            disableFocusRipple
            disableRipple
            onClick={() => setShowCategoriesBar(true)}
            sx={{ mt: '30px', height: '27px' }}
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="20"
              viewBox="0 0 31 20"
              fill="none"
            >
              <path
                d="M30 10L1 10M30 10L19.9615 19M30 10L19.9615 1"
                stroke={ThemeModeColor('#000', '#fff')}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
        )
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
              background: ThemeModeColor('#fff', '#0C0020'),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Container>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item, onCloseNav }) {
  const { search } = usePathname();

  const active = `?name=${item.title}` === search;

  return (
    <ListItemButton
      component={RouterLink}
      href={`${item.path}?name=${item.title}`}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: ThemeModeColor('#000', '#fff'),
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          // bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            color: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" onClick={onCloseNav}>
        {item.title}{' '}
      </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
  onCloseNav: PropTypes.func,
};
