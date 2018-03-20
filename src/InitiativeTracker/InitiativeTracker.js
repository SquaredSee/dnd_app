import React, { Component } from 'react';
import Entry from './Entry';

class InitiativeTracker extends Component {
  state = {
    entries: [
      { name: 'test1', score: 4, id: 1 },
      { name: 'test2', score: 6, id: 2 },
      { name: 'test3', score: 2, id: 3 },
      { name: 'test4', score: 1, id: 4 },
    ],
  };

  style = {
    width: '75%',
  };

  addEntry = (name, score) => {
    const entries = [...this.state.entries];
    entries.push({ name, score });
    entries.sort((a, b) => b.score - a.score);
    this.setState({ entries });
  }

  sortEntries = () => {
    // sorts entries by their initiative score
    const entries = [...this.state.entries];
    entries.sort((a, b) => b.score - a.score);
    this.setState({ entries });
    // return entries;
  }

  render() {
    return (
      <div className="card" style={this.style}>
        <div className="card-body">
          {this.state.entries.map((entry, i) => (
            <div className="row">
              <Entry name={entry.name} score={entry.score} key={entry.id} />
            </div>
          ))}
          <button className="btn" onClick={this.sortEntries}>sort</button>
        </div>
      </div>
    );
  }
}

export default InitiativeTracker;
