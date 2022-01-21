import React from "react";

const CharacterCard = ({gender, image, name, species, status}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="CharacterImage"/>
      </div>
      <div className="card-information">
        <h4>{name}</h4>
        <p>Gender: <span>{gender}</span></p>
        <p>Specie:<span>{species}</span></p>
        <p>Status: <span>{status}</span></p>
      </div>
    </div>
  )
}

export default CharacterCard
