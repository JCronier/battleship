import React from 'react';
import classNames from 'classnames';

// Components
import Tile from './Tile';

// Stylesheets
import './Row.scss';

export default function Row ({ rowId, onClick }) {
  const rowClass = classNames('row');

  const row = [...Array(10).keys()].map(id => {
    return <Tile key={id} id={rowId.concat(id + 1)} onClick={onClick}/>
  });

  return (
    <div className={rowClass}>
      {row}
    </div>
  );
};