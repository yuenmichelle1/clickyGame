import React from 'react';
import "./CharacterCard.css";

const CharacterCard = (props) => {
    return(
        <div className ="Card" onClick={() => props.check_click(props.name)}>
            <div className = "img-container">
                <img src={props.image} alt={props.name} width="150" height="150"/>
                <div className ="imgBanner"> <h4>{props.name} </h4></div>
            </div>
        </div>
    )
}
export default CharacterCard;