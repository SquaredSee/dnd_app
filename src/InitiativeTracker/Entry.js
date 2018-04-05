import PropTypes from 'prop-types';
import React from 'react';
import './Entry.css';

// const classes = ['list-group-item'];

const Entry = (props) => {
  const classes = ['list-group-item trash_icon_hide'];
  if (props.active) {
    classes.push('active');
  }

  return (
    <li className={classes.join(' ')}>
      <span>{props.name} - {props.score}</span>
      <span className="float-right trash_icon" onClick={props.delete} >
        <span className="sr-only">Delete Entry</span>
        <i className="fas fa-trash" />
      </span>
    </li>
  );
};

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  delete: PropTypes.func.isRequired,
};

export default Entry;
