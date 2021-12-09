import React from 'react';
import classNames from 'classnames';

import './Tile.scss';

export default function Tile ({hit, miss}) {
  const actionClass = classNames({
    "hit": hit,
    "miss": miss
   });
  return (
    <div className='tile'>
      <div className={actionClass}></div>
    </div>
  );
};