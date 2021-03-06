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
    ],
    currentScore: 0,
    top_score: 0,
    unclickedPokemon: [
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
    ],
    message: `Click A Pokemon!`
  };

  pokemonCaught = (name) => {
    const clickedPokemon = this.state.unclickedPokemon.find(el => el === name);
    console.log(clickedPokemon);
    if (clickedPokemon){
      const clickedPokemonIndex = this.state.unclickedPokemon.indexOf(clickedPokemon);
      const newScore = this.state.currentScore + 1;
      if (newScore > this.state.top_score){
        this.setState({
          currentScore: newScore,
          clickedPokemon: this.state.unclickedPokemon.splice(clickedPokemonIndex, 1),
          top_score: newScore,
          message: `Click A Pokemon!`
        })
      } else {
        this.setState({
          currentScore: this.state.currentScore + 1,
          clickedPokemon: this.state.unclickedPokemon.splice(clickedPokemonIndex, 1),
          message: `Click A Pokemon!`
        })
      }
    } else {
      this.setState({
        message: 'Pokemon fled!',
        currentScore: 0,
        unclickedPokemon: [
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
      })
    }
    this.shuffleArray(this.state.pokemon);
  }

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  render() {
    return (
      <div className="App">
        <NavbarHeader
          message={this.state.message}
          score={this.state.currentScore}
          top_score={this.state.top_score}
        />
        <h1 className="rules"> Gotta Catch Em All!</h1>
        <header className="App-header">
          <div className="container">
            {this.state.pokemon.map(el => 
              <CharacterCard
                image={"./images/".concat(el).concat(".png")}
                name={el}
                check_click={this.pokemonCaught}
                key={el}
              />
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
