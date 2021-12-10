import React, { useState } from 'react';
import classNames from 'classnames';

import './Tile.scss';

export default function Tile ({value, status, id, onClick, onMouseEnter, onMouseLeave}) {
  // const [state, setState] = useState(status);
  // const [clicked, setClicked] = useState(false);
  let tileClass = classNames("tile", status.class);

  // const onEnter = () => {
  //   if (!clicked) setState("ship");
  // };

  // const onLeave = () => {
  //   if (!clicked) setState(status);
  // };

  // const onClick = () => {
  //   setClicked(prev => {
  //     setState("ship");
  //     return true;
  //   });
  // };

  return (
    <div
      className={tileClass}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={id}
      value={value}
    />
  );
};