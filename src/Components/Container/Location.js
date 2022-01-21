import React from "react";

const Location = ({dimension, name, residents, type}) => {
  return (
    <div className="card">
      <div className="card-information">
        <p>Dimension:<span>{dimension}</span></p>
        <p>Name:<span>{name}</span></p>
        <p>Residents:<span>{residents.length}</span></p>
        <p>Type:<span>{type}</span></p>
      </div>
    </div>
  )
}

export default Location
