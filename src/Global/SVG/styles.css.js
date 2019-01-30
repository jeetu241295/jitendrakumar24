export const styles = theme => ({
  whiteColor: {
    fill: theme.colors.white,
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: 14,
      height: 16
    }
  },
  location: {
    [theme.breakpoints.up("xs")]: {
      width: 32,
      height: 32
    }
  },
  primaryColor: { fill: theme.colors.primary }
});
export default styles;
