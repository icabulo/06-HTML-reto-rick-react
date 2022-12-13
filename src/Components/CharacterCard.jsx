import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
  //   console.log(props);
  return (
    <div className="card">
      <div className="image-container">
        <img
          src={props.url}
          alt="character profile"
          className="character-image"
        />
      </div>
      <div className="text-container">
        <h5>{props.name}</h5>
        <p className="location-title">Last Location</p>
        <p className="location">{props.location}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
