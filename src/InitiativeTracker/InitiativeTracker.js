import React, { Component } from 'react';
import Entry from './Entry';

class InitiativeTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        { name: 'test1', score: '4', id: 1 },
        // { name: 'test2', score: 6, id: 2 },
        // { name: 'test3', score: 2, id: 3 },
        // { name: 'test4', score: 1, id: 4 },
      ],
      inputName: '',
      inputScore: '',
      inputId: 2,
      activeIndex: null,
    };

    this.style = {
      width: '75%',
      margin: 'auto',
    };

    // This binding is necessary to make `this` work in the callback
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.beginCombat = this.beginCombat.bind(this);
    this.endCombat = this.endCombat.bind(this);
    this.advanceCombat = this.advanceCombat.bind(this);
    // this.deleteEntry = this.deleteEntry.bind(this);
  }

  addEntry = (name, score) => {
    // get current entries and add a new one to the list
    const entries = [...this.state.entries];
    const newEntry = {
      name,
      score,
      id: this.state.inputId,
    };
    entries.push(newEntry);

    // sort entries high to low
    entries.sort((a, b) => b.score - a.score);

    if (this.state.activeIndex !== null && entries.indexOf(newEntry) <= this.state.activeIndex) {
      // increment active index to maintain correct position in initiative order
      this.setState({
        entries,
        inputId: this.state.inputId + 1,
        activeIndex: this.state.activeIndex + 1,
      });
    }
    else {
      this.setState({ entries, inputId: this.state.inputId + 1 });
    }

    // update the entries state and increment the inputId by 1
    this.setState({ entries, inputId: this.state.inputId + 1 });
    console.log(`New entry added: ${JSON.stringify(newEntry)}`);
  }

  deleteEntry = (entry) => {
    const entries = [...this.state.entries];
    const index = entries.indexOf(entry);

    if (index > -1) {
      // remove item from list
      entries.splice(index, 1);

      if (this.state.activeIndex !== null) {
        if (entries.length <= 0) {
          // if there are no more entries, combat is over
          this.setState({ entries, activeIndex: null });
          console.log('No entries remaining, combat has ended');
        }
        else if (this.state.activeIndex >= entries.length || this.state.activeIndex > index) {
          // move index backward if it is higher than the length orhigher than the deleted index
          this.setState({ entries, activeIndex: this.state.activeIndex - 1 });
        }
        else if (this.state.activeIndex <= index) {
          this.setState({ entries });
        }
      }
      else {
        this.setState({ entries });
      }
      console.log(`deleted ${JSON.stringify(entry)}`);
    }
    else {
      console.error(`failed to remove ${JSON.stringify(entry)} from entries`);
    }
  }

  beginCombat = () => {
    // set the active entry to the first index if combat is not started
    // and entries is not empty
    if (this.state.activeIndex === null && this.state.entries.length > 0) {
      console.log('combat has begun');
      this.setState({ activeIndex: 0 });
    }
  }

  endCombat = () => {
    // set the active entry to the first index if combat is not started
    // and entries is not empty
    if (this.state.activeIndex !== null) {
      console.log('combat has ended');
      this.setState({ activeIndex: null });
    }
  }

  advanceCombat = () => {
    // advance combat by 1
    const index = this.state.activeIndex + 1;
    if (index < this.state.entries.length) {
      this.setState({ activeIndex: index });
    }
    else if (index >= this.state.entries.length) {
      this.setState({ activeIndex: 0 });
    }
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
    const combatControls = this.state.activeIndex === null ? (
      <div className="mb-2">
        <button className="btn btn-success mt-2 mr-2" onClick={this.beginCombat}>Begin Combat!</button>
      </div>
    ) : (
      <div className="mb-2">
        <button className="btn btn-danger mr-2 mt-2" onClick={this.endCombat}>End Combat</button>
        <button className="btn mt-2" onClick={this.advanceCombat}><i className="fas fa-arrow-down" /> Advance</button>
      </div>
    );

    return (
      <div className="card" style={this.style}>
        <div className="card-body">
          <h5 className="card-title">Initiative Tracker</h5>
          <form onSubmit={this.handleEntrySubmit} className="form-inline">
            <div className="form-group mb-2 mr-2">
              <label htmlFor="inputName" className="sr-only">Name</label>
              <input type="text" name="inputName" id="inputName" className="form-control"
                placeholder="Entry Name" value={this.state.inputName} onChange={this.handleInputChange} required />
            </div>
            <div className="form-group mb-2 mr-2">
              <label htmlFor="inputScore" className="sr-only">Initiative Score</label>
              <input type="number" name="inputScore" id="inputScore" className="form-control"
                placeholder="Initiative Score" value={this.state.inputScore} onChange={this.handleInputChange} required />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </form>

          {this.state.entries.length > 0 && combatControls}

          <ul className="list-group">
            {this.state.entries.map((entry, i) => (
              <Entry
                name={entry.name}
                score={entry.score}
                key={entry.id}
                active={i === this.state.activeIndex}
                delete={this.deleteEntry.bind(this, entry)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default InitiativeTracker;
