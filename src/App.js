import React, { Component } from 'react';
import './App.css';
import Circles from './Components/Circles/Circles';
import CircleSelector from './Components/CircleSelector/CircleSelector'

const circles = [1, 2, 3, 4]

state =  {
  chosen: 1
}

selector = (circleNum) =>{
  this.setState({
    chosen :circleNum
  })
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <Circles 
            circles={circles}
            chosen={this.state.chosen}
            selector={this.handleSelect}
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