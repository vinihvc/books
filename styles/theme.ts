export default {
  grid: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    full: '100%'
  },
  gutters: {
    base: '20px'
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '"Playfair Display", serif'
  },
  fontSizes: {
    '3xs': '10px',
    '2xs': '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
    '2xl': '24px'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 900
  },
  borders: {
    none: 'none',
    thin: '1px solid'
  },
  colors: {
    white: '#fffcf9',
    black: '#000',
    gray: '#cbd5e0',
    primary: '#fe6a78',
    secondary: '#000',
    bg: '#fff',
    bgSecondary: '#fdf8f2',
    bgBody:
      'linear-gradient(180deg, rgba(253,248,242,1) 0%, rgba(255,255,255,1) 100%);',
    text: '#3f4043',
    link: '#4abdf1',
    lightYellow: '#fff6e5',
    yellow: '#fcbc48',
    blue: '#4550a7',
    darkBlue: '#00173d',
    purple: '#451475',
    orange: '#f14f29',
    lightGreen: '#eef5db',
    transparent: 'transparent'
  },
  space: {
    xs: '10px',
    sm: '15px',
    md: '20px',
    lg: '25px',
    xl: '30px'
  },
  radii: {
    none: '0',
    sm: '2px',
    base: '5px',
    md: '0.375rem',
    lg: '10px',
    xl: '0.75rem',
    full: '9999px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
