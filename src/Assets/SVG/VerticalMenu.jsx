import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const VerticalMenu = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon
      classes={{ root: classNames(classes.icon, className) }}
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <g>
          <g>
            <circle cx="12" cy="4" r="2.5" />
            <circle cx="12" cy="12" r="2.5" />
            <circle cx="12" cy="20" r="2.5" />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

VerticalMenu.propTypes = { className: PropTypes.string };
VerticalMenu.defaultProps = { className: null };

export default VerticalMenu;
