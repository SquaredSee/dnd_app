import React from 'react';
import InitiativeTracker from './InitiativeTracker/InitiativeTracker';
import ExampleComponent from './ExampleComponent/ExampleComponent';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div class="container">
//         <InitiativeTracker />
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="container">
    <InitiativeTracker />
    <ExampleComponent show={true} />
  </div>
);

export default App;
