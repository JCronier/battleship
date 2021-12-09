import React from 'react';
import classNames from 'classnames';

import './Tile.scss';

export default function Tile ({hit, miss, id, onClick}) {
  let actionClass = classNames({
    "hit": hit,
    "miss": miss
   });

  return (
    <div className='tile' onClick={(event) => onClick(event.target.id)} id={id}>
      <div className={actionClass}></div>
    </div>
  );
};