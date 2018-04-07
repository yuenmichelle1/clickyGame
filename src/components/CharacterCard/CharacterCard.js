import React from 'react';
import "./CharacterCard.css";

const CharacterCard = (props) => {
    return(
        <div className ="Card">
            <div className = "img-container">
                <img src={props.image} alt={props.name} width="150" height="150"/>
                <div className ="imgBanner"> {props.name} </div>
            </div>
        </div>
    )
}
export default CharacterCard;