import React from "react";

const Filter = ({ onChange, value }) => {
  return (
    <div>
      <input
        onChange={onChange}
        placeholder="Filterr"
        value={value}
      />
    </div>
  )
}

export default Filter
