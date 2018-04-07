import React from 'react';

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
                <li>
                   <h3> Score: {props.score}  | Top Score: {props.top_score} </h3>
                </li>        
            </ul>
        </nav>
    )
}

export default NavbarHeader;