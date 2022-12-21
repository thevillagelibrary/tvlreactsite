import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props) => ({
    html: {
      fontSize: ['7px', '7px', '16px', '20px', '20px'],
    },
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
};

export const brand = {
  headerColor: '#fff',
  headerBackground: '#7283fe', //'#400000',
  hLinkColor: '#333333', //'#fffffff',
  hLinkColorHover: '#f29085',
  hlinkColorActive: '',
  hLinkBackground: '#fff', //'#964800',
  hLinkBackgroundActive: '#f29085', //'#E6B862'
  vLinkColor: '#333333', //'#3C1E00',
  vLinkColorHover: '#f29085',
  vLinkColorActive: '',
  vLinkBackground: '#fff', //'#e6deb9',
  vLinkBackgroundActive: '#f29085', //'#E6B862'
};

export const theme = extendTheme({
  styles: styles,
  colors: brand,
  components: {
    Divider: {
      variants: {
        custom: {
          borderColor: '#7283fe',
          borderWidth: '.0625rem',
          borderStyle: 'none none solid none',
        },
      },
    },
  },
});
