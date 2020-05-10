import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(theme => ({
  link: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    color: theme.colors.white,
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

const LinkJK = props => {
  const { className, href, children, ...others } = props;
  const classes = styles();
  return (
    <Link
      className={classNames(classes.link, className)}
      href={href}
      {...others}
    >
      {children}
    </Link>
  );
};

LinkJK.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

LinkJK.defaultProps = {
  className: ''
};

export default LinkJK;
