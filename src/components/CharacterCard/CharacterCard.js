import React from 'react';
import "./CharacterCard.css";

const CharacterCard = (props) => {
    return(
        <div className ="Card">
            <div className = "img-container">
                <img src={props.image} alt={props.name}/>
            </div>
        </div>
    )
}
export default CharacterCard;