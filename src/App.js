import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard/CharacterCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Try this!</h1>
        <header className="App-header">
          <CharacterCard image="http://laoblogger.com/images/adventure-time-clipart-phone-10.jpg" name="Finn" />
          {/* <CharacterCard />
          <CharacterCard />
          <CharacterCard /> */}
        </header>  
      </div>
    );
  }
}

export default App;
