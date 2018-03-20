import React from 'react';
import './Entry.css';

const Entry = (props) => (
  <div className="card entry">
    <div className="card-body">{props.name} - {props.score}</div>
  </div>
);

export default Entry;
