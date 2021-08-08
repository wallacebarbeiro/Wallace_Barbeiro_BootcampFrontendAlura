import typographyVariants from './typographyVariants';
import breakpoints from './breakpoints';

const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#4d0079',
    },
  },
  borders: {
    main: {
      color: '#c100a5',
    },
  },
  primary: {
    main: {
      color: '#c100a5',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#fff',
      contrastText: '#b1b1b1',
    },
  },
  tertiary: {
    main: {
      color: '#333333',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  fontFamily: '\'Roboto\', sans-serif',
  transition: '200ms ease-in-out',
};
