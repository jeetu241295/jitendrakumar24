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
    '&:hover': {
      textDecoration: 'none'
    }
  }
};

const LinkJK = props => {
  const { sx, href, children, ...others } = props;

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
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  href: PropTypes.string.isRequired
};

LinkJK.defaultProps = {
  sx: {}
};

export default LinkJK;
