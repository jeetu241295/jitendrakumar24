import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // MuiOutlinedInput: {
    //   notchedOutline: {
    //     borderColor: colors.white + " !important"
    //   }
    // },
    // MuiFormLabel: {
    //   root: {
    //     color: colors.white
    //   }
    // }
  },
  palette: {
    primary: { main: '#11cb5f' },
    secondary: { main: '#ff2b4a' },
    error: { main: '#BA0C2F' }
  },
  colors: {
    white: '#fff',
    black: '#000',
    black5: 'rgba(0, 0, 0, 0.5)',
    black2: 'rgba(0, 0, 0, 0.2)',
    navbar: '#343a40',
    footer: '#222222',
    footerNav: '#c3bec2',
    primary: '#ff2b4a',
    contact: '#352639',
    error: '#BA0C2F',
    mainAction: '#11cb5f',
    progressbarColor: '#57d131',
    sideBar: '#6e9dea',
    containerBackground: '#F8F9FA',
    buttonColor: '#6c757d',
    quoteBackground: '#2f2f2f',
    calenderColor: '#B3BDC6',
    textColor: '#505050'
  },
  typography: {
    useNextVariants: true,
    htmlFontSize: 10
  }
});

export default theme;
