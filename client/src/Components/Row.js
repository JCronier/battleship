import React from 'react';
import classNames from 'classnames';

// Components
import Tile from './Tile';

// Stylesheets
import './Row.scss';

export default function Row () {
  const row = Array(10).fill(<Tile />);

  const rowClass = classNames('row');

  return (
    <div className={rowClass}>
      {row}
    </div>
  );
};