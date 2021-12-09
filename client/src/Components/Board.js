import React from 'react';
import classNames from 'classnames';

// Components
import Row from './Row';

// Stylesheets
import './Board.scss';

export default function Board ({ onClick }) {
  const boardClass = classNames('board');

  const board = 'ABCDEFGHIJ'.split('').map((rowId, index) => {
    return <Row key={index} rowId={rowId} onClick={onClick}/>
  });

  return (
    <div className={boardClass}>
      {board}
    </div>
  );
};