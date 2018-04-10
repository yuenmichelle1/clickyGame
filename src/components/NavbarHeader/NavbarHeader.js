import React from 'react';
import './NavbarHeader.css'

const NavbarHeader = props => {
    return (
        <nav className="navbar">
            <ul>
                <li className ="brand">
                    <img src="./images/pokemon.header.png" width="300" height="200" alt="Pokemon Header"/>
                </li>
                <li>
                    <a href="/"> Clicky Game! Chibi Pokemon Edition!</a>
                </li>  
                <li className="scoreboard">
                    <h1> {props.message}</h1>
                </li>    
                <li className="scoreboard">
                   <h1> Score: {props.score}  | Top Score: {props.top_score} </h1>
                </li>        
            </ul>
        </nav>
    )
}

export default NavbarHeader;