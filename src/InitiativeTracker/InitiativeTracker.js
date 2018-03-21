import React, { Component } from 'react';
import Entry from './Entry';

class InitiativeTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        // { name: 'test1', score: 4, id: 1 },
        // { name: 'test2', score: 6, id: 2 },
        // { name: 'test3', score: 2, id: 3 },
        // { name: 'test4', score: 1, id: 4 },
      ],
      inputName: '',
      inputScore: '',
      inputId: 1,
    };

    this.style = {
      width: '75%',
      margin: 'auto',
    };

    // This binding is necessary to make `this` work in the callback
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addEntry = (name, score) => {
    // get current entries and add a new one to the list
    const entries = [...this.state.entries];
    const newEntry = {
      name,
      score,
      id: this.state.inputId,
      active: false,
    };
    entries.push(newEntry);

    // sort entries high to low
    entries.sort((a, b) => b.score - a.score);

    // update the entries state and increment the inputId by 1
    this.setState({ entries, inputId: this.state.inputId + 1 });
    console.log(`New entry added: ${JSON.stringify(newEntry)}`);
  }

  handleEntrySubmit = (e) => {
    e.preventDefault();
    this.addEntry(this.state.inputName, this.state.inputScore);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name} - ${value}`);

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="card" style={this.style}>
        <div className="card-body">
          <h5 className="card-title">Initiative Tracker</h5>
          <form onSubmit={this.handleEntrySubmit} className="form-inline mb-2">
            <div className="form-group mr-2">
              <label htmlFor="inputName" className="sr-only">Name:</label>
              <input type="text" name="inputName" id="inputName" className="form-control"
                placeholder="Entry Name" value={this.state.inputName} onChange={this.handleInputChange} required />
            </div>

            <div className="form-group mr-2">
              <label htmlFor="inputScore" className="sr-only">Initiative Score:</label>
              <input type="number" name="inputScore" id="inputScore" className="form-control"
                placeholder="Initiative Score" value={this.state.inputScore} onChange={this.handleInputChange} required />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          <ul className="list-group">
            {this.state.entries.map((entry) => (
              <Entry name={entry.name} score={entry.score} key={entry.id} active={entry.active} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default InitiativeTracker;
