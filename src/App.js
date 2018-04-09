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
    clickedPokemon: [],
    message: `Let's play!`
  };

  pokemonCaught = (name) => {
    let clickedPokedex = this.state.clickedPokemon.indexOf(name);
    if (clickedPokedex === -1){
      this.setState({
        currentScore: this.state.currentScore + 1,
        clickedPokemon: [...this.state.clickedPokemon.splice(), name]
      })
      console.log(this.state.clickedPokemon[0]);
    } else {
      this.setState({
        message: 'Pokemon fled!',
        currentScore: 0
      })
      console.log(`${this.state.clickedPokemon[0]}  PEACE OUT`);
    }
    this.shuffleArray(this.state.pokemon);
  }

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  }

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log("click");
  };

  render() {
    return (
      <div className="App">
        <NavbarHeader
          message={this.state.message}
          score={this.state.currentScore}
          top_score={this.state.top_score}
        />
        <h1> Gotta Catch Em All!</h1>
        <header className="App-header">
          <div className="container">
            {this.state.pokemon.map((el, index) => 
              <CharacterCard
                image={"./images/".concat(el).concat(".png")}
                name={el}
                check_click={this.pokemonCaught}
              />
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
