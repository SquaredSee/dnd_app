import PropTypes from 'prop-types';
import React from 'react';

const Entry = (props) => (
  <div className="card mb-2">
    <div className="card-body">{props.name} - {props.score}</div>
  </div>
);

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Entry;
