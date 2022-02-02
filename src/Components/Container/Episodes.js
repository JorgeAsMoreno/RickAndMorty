import React from "react";

const Episodes = ({air_date, episode, name}) => {
  return (
    <div className="card">
      <div className="card-information">
        <p>Name:<span>{name}</span></p>
        <p>Air Date:<span>{air_date}</span></p>
        <p>Episode:<span>{episode}</span></p>
      </div>
    </div>
  )
}

export default Episodes
