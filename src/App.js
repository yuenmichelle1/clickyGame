import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import NavbarHeader from "./components/NavbarHeader/NavbarHeader";

class App extends Component {
  state = {
    pokemon: [
      "Pichu",
      "Bulbasaur",
      "Charmander",
      "Charizard",
      "Jigglypuff",
      "Meowth",
      "Mew",
      "Pikachu",
      "Psyduck",
      "Squirtle",
      "Togepi",
      "Vulpix"
    ]
  };

  pokemonCaught = () => {
    console.log(`gotta catch them all!!!`)
  }


  render() {
    return (
      <div className="App">
        <NavbarHeader score="0" top_score="0" />
        <h1> Gotta Catch Em All!</h1>
        <header className="App-header">
          <div className="container">
            {this.state.pokemon.map(el => <CharacterCard onClick={this.pokemonCaught} image= {'./images/'.concat(el).concat('.png')} name={el} key={this.state.pokemon.indexOf(el) + 1}/>)}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
