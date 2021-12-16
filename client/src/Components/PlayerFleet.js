import React from "react";

export default function PlayerFleet({ onClick }) {
  const fleet = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];

  const playerFleet = fleet.map((ship, index) => (
    <li key={index}>
      <button id={ship} onClick={(event) => onClick(event.target.id)}>
        {ship}
      </button>
    </li>
  ));

  return (
    <ul>
      {playerFleet}
    </ul>
  )
}