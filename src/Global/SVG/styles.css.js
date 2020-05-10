import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(() => ({
  icon: {
    margin: '0 1rem',
    width: props => props.width || 16,
    height: props => props.height || '100%',
    verticalAlign: 'middle'
  }
}));
export default styles;
