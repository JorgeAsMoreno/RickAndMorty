import React from "react";

const Filter = ({ onChange, value }) => {
  return (
    <div className="filter-container">
      <input
        onChange={onChange}
        placeholder="Filter by name"
        value={value}
      />
    </div>
  )
}

export default Filter
