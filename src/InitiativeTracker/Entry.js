import React from 'react';

const Entry = (props) => (
  <div className="card mb-2">
    <div className="card-body">{props.name} - {props.score}</div>
  </div>
);

export default Entry;
