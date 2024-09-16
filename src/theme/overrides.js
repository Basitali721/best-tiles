import { alpha } from '@mui/material/styles';
// import { outlinedInputClasses } from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export function overrides(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          background: theme.palette.mode === 'dark' ? '#1F143D' : '#FFF',
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1300px !important',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[900], 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#b23751',
          },
        },
        containedSuccess: {
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#007867',
          },
        },
        sizeLarge: {
          minHeight: 48,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.card,
          // borderRadius: Number(theme.shape.borderRadius) * 2,
          borderRadius: '10px',
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          background: theme.palette.mode === 'dark' ? '#0C0020' : '#CDC2EB59',
          color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
          color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          // },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        color: 'white',
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          border: `1px solid ${theme.palette.mode === 'light' ? '#000' : '#fff'}`,
          borderRadius: '100px',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          fontSize: '14px',
          paddingInline: 20,
          paddingBlock: 12,
          border: 'none',
          color: theme.palette.mode === 'light' ? '#000' : '#fff',
          fontWeight: 500,
          ':hover': { borderRadius: '100px' },
          '&.Mui-selected': {
            color: theme.palette.mode === 'light' ? '#fff' : '#000',
            background: theme.palette.mode === 'light' ? '#000' : '#fff',
            borderRadius: '100px',
            fontWeight: 600,
            ':hover': {
              color: theme.palette.mode === 'light' ? '#fff' : '#000',
              background: theme.palette.mode === 'light' ? '#000' : '#fff',
            },
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          background: theme.palette.mode === 'dark' ? '#0C0020' : '#fff',
        },
      },
    },
  };
}
