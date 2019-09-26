export const styles = theme => ({
  whiteColor: {
    fill: theme.colors.white,
    marginRight: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: 14,
      height: 16
    }
  },
  calenderColor: {
    fill: theme.colors.calenderColor
  },
  location: {
    width: '3.2rem',
    height: '3.2rem'
  },
  primaryColor: { fill: theme.colors.primary },
  blackColor: {
    fill: theme.colors.black,
    marginRight: '1rem'
  }
});
export default styles;
