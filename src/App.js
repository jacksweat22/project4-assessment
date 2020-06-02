import React, { Component } from 'react';
import './App.css';
import Circles from './Components/Circles/Circles';
import CircleSelector from './Components/CircleSelector/CircleSelector'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <Circles 
          />
          <CircleSelector 
          CircleSelector={CircleSelector}
          />
  
        </main>
      </div>
    );
  }
}

export default App;