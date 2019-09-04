import React from "react";

export default function StatsInput(props) {
  return (
    <div>
      <input placeholder="enter player id" onChange={props.handleIdInput} />
      <button onClick={props.handleSubmit}>View past three season stats</button>
      <select onChange={props.handleSelect}>
        <option value="QB">QB</option>
        <option value="RB">RB</option>
        <option value="WR">WR</option>
        <option value="K">K</option>
        <option value="TE">TE</option>
      </select>
    </div>
  );
}
