import { useTheme } from '@mui/material';

export function ThemeModeColor(lightModeColor, darkModeColor) {
  const {
    palette: { mode, primary, neutral },
  } = useTheme();
  lightModeColor = lightModeColor || neutral[600];
  darkModeColor = darkModeColor || primary.lightest;
  return mode === 'dark' ? darkModeColor : lightModeColor;
}
