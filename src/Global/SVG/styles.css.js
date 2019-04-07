export const styles = theme => ({
  whiteColor: {
    fill: theme.colors.white,
    marginRight: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: 14,
      height: 16,
    },
  },
  calenderColor: {
    fill: theme.colors.calenderColor,
  },
  location: {
    [theme.breakpoints.up('xs')]: {
      width: 32,
      height: 32,
    },
  },
  primaryColor: { fill: theme.colors.primary },
  blackColor: {
    fill: theme.colors.black,
    marginRight: '1rem',
  },
});
export default styles;
