import { createTheme } from '@mui/material/styles';
import IndieFlowerFont from '__ASSETS__/Fonts/IndieFlower-Regular.ttf';
import RobotoRegular from '../Assets/Fonts/Roboto-Regular.ttf';
import RobotoItalic from '../Assets/Fonts/Roboto-Italic.ttf';
import RobotoLight from '../Assets/Fonts/Roboto-Light.ttf';
import RobotoLightItalic from '../Assets/Fonts/Roboto-LightItalic.ttf';
import RobotoMedium from '../Assets/Fonts/Roboto-Medium.ttf';
import RobotoMediumItalic from '../Assets/Fonts/Roboto-MediumItalic.ttf';
import CourgetteFont from '../Assets/Fonts/Courgette-Regular.ttf';

const indieFlower = {
  fontFamily: 'Indie Flower',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${IndieFlowerFont}) format('truetype')`
};

const robotoRegular = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${RobotoRegular}) format('truetype')`
};
const robotoItalic = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${RobotoItalic}) format('truetype')`
};
const robotoMedium = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${RobotoMedium}) format('truetype')`
};
const robotoMediumItalic = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${RobotoMediumItalic}) format('truetype')`
};
const robotoLight = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${RobotoLight}) format('truetype')`
};
const robotoLightItalic = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${RobotoLightItalic}) format('truetype')`
};

const courgette = {
  fontFamily: 'Courgette',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${CourgetteFont}) format('truetype')`
};

const theme = createTheme({
  mode: 'light',
  components: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          indieFlower,
          courgette,
          robotoItalic,
          robotoLight,
          robotoMedium,
          robotoLightItalic,
          robotoMediumItalic,
          robotoRegular
        ]
      }
    }
  },
  palette: {
    primary: { main: '#11cb5f' },
    secondary: { main: '#ff2b4a' },
    error: { main: '#BA0C2F' },
    colors: {
      transparent: 'transparent',
      black8: 'rgba(0, 0, 0, 0.8)',
      black5: 'rgba(0, 0, 0, 0.5)',
      black2: 'rgba(0, 0, 0, 0.2)',
      navbar: '#343a40',
      footer: '#222222',
      footerNav: '#c3bec2',
      contact: '#352639',
      heading: '#05a849',
      progressbarColor: '#57d131',
      sideBar: '#6e9dea',
      containerBackground: '#F8F9FA',
      buttonColor: '#6c757d',
      quoteBackground: '#2f2f2f',
      calenderColor: '#B3BDC6',
      textColor: '#505050'
    },
    gradient: {
      name: 'linear-gradient(to bottom, #11cb5f, #11cbff)'
    }
  },
  typography: {
    useNextVariants: true,
    htmlFontSize: 10
  }
});

export default theme;
