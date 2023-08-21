import React from 'react';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

const styles = {
  link: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    color: 'common.white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  }
};

const LinkJK = props => {
  const { href, sx, children, ...others } = props;

  return (
    <Link
      sx={[styles.link, ...(Array.isArray(sx) ? sx : [sx])]}
      href={href}
      {...others}
    >
      {children}
    </Link>
  );
};

LinkJK.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

LinkJK.defaultProps = {
  sx: {}
};

export default LinkJK;
