import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      Green: '#5A6F6A',       // Custom color: Feldgrau
      Blue: '#002642',   // Custom color: Prussian Blue
      white: '#FFFFFF',          // Custom color: White
    },
  },
  // Add other theme customizations here if needed
});

export default theme;