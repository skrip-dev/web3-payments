import { extendTheme, theme as DefaultChakraTheme } from '@chakra-ui/react';

export const theme = {
  ...DefaultChakraTheme,

  fonts: {
    ...DefaultChakraTheme.fonts,
    heading: 'Poppins',
    body: 'Poppins',
  },

  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
};

export const defaultTheme = extendTheme(theme);
