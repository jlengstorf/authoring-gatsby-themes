const fontSizeBase = 18;
const fontSizes = [0.875, 1, 1.125, 1.25, 1.5, 2].map(
  scale => fontSizeBase * scale
);

fontSizes.body = fontSizes[1];
fontSizes.heading = fontSizes[5];
fontSizes.subheading = fontSizes[4];

const headingDefaults = {
  color: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  margin: '1rem 0 0'
};

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes,
  fontWeights: {
    body: 'normal',
    heading: 'bold',
    bold: 'bold'
  },
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    gray: ['#efefef', '#ddd', '#777', '#333', '#111'],
    text: '#333',
    heading: '#111',
    background: '#fff',
    primary: '#ff0'
  },
  sizes: {
    default: '90vw',
    max: '540px'
  },
  styles: {
    Layout: {
      color: 'text',
      fontFamily: 'body',
      fontSize: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    Header: {
      margin: '0 auto',
      maxWidth: 'max',
      width: 'default'
    },
    Main: {
      margin: '0 auto',
      marginBottom: 4,
      marginTop: 4,
      maxWidth: 'max',
      width: 'default'
    },
    Container: {
      padding: 0
    },
    h1: {
      ...headingDefaults,
      fontSize: 'heading'
    },
    h2: {
      ...headingDefaults,
      fontSize: 'subheading'
    },
    ul: {
      borderTop: '1px solid',
      borderColor: 'gray.0',
      listStyle: 'none',
      padding: 0
    },
    li: {
      borderBottom: '1px solid',
      borderColor: 'gray.1',
      padding: 2,
      '&:focus-within,&:hover': {
        backgroundColor: 'gray.0'
      }
    }
  }
};

export default theme;
