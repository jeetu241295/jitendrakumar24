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
      viewBox="0 0 512 512"
      {...props}
    >
      <g>
        <g>
          <g>
            <circle cx="256" cy="256" r="64" />
            <circle cx="256" cy="448" r="64" />
            <circle cx="256" cy="64" r="64" />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

VerticalMenu.propTypes = { className: PropTypes.string };
VerticalMenu.defaultProps = { className: null };

export default VerticalMenu;
