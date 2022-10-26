import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import logoLight from './Trinary1.png'
import logoDark from './TrinaryDarkMode2.png'

export const defaultColors = {
  white: '#FFFFFF',
  black: '#000',
  main: '#E53130',
	darker: '#9CADC6',
  peachPuff: '#FBD6B7',
  salmonPink: '#FF9AA2',
  blush: '#DE5672',
  amaranthPurple: '#A23055',
  darkSienna: '#3F0A1D',

};

export const assetsLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: defaultColors.white, 
    main: defaultColors.main, 
    darker: defaultColors.darker, 
    ...defaultColors
  },
  images: {
    logo: logoLight
  },
};

export const assetsDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: defaultColors.black, 
    main: defaultColors.main, 
    darker: defaultColors.darker, 
    ...defaultColors
  },

  images: {
    logo: logoDark
  },
};
