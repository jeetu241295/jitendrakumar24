import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  icon: {
    margin: '0 1rem',
    width: props => props.width || 16,
    height: props => props.height || '100%',
    verticalAlign: 'middle'
  },
  heartIcon: {
    fill: theme.colors.primary
  }
}));
export default styles;
