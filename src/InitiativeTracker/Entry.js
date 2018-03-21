import PropTypes from 'prop-types';
import React from 'react';

const classes = ['list-group-item'];

const Entry = (props) => {
  if (props.active) {
    classes.push('active');
  }

  return <li className={classes.join(' ')}>{props.name} - {props.score}</li>;
};

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Entry;
