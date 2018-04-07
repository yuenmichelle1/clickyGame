import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard/CharacterCard.js';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader score="0" top_score="0"/>
        <h1> Gotta Catch Em All!</h1>
        <header className="App-header">
          <div className="container">
            <CharacterCard image="./images/pichu.png" name="Pichu" />
            <CharacterCard image="./images/bulbasaur.png" name="Bulbasaur"/>
            <CharacterCard image="./images/chamander.png" name="Charmander"/>
            <CharacterCard image="./images/charizard.png" name="Charizard"/>
            <CharacterCard image="./images/jiggalypuff.png" name="Jigglypuff"/>
            <CharacterCard image="./images/meowth.png" name="Meowth"/>
            <CharacterCard image="./images/mewtew.png" name="Mew"/>
            <CharacterCard image="./images/pikachu.png" name="Pikachu"/>
            <CharacterCard image="./images/psyduck.png" name="Psyduck"/>
            <CharacterCard image="./images/squirtle.png" name="Squirtle"/>
            <CharacterCard image="./images/togepi.png" name="Togepi"/>
            <CharacterCard image="./images/vulpic.png" name="Vulpix"/>
          </div>
        </header>  
      </div>
    );
  }
}

export default App;
