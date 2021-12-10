import React, { useState } from 'react';
import classNames from 'classnames';

// Components
import Tile from './Tile';

// Stylesheets
import './Row.scss';

export default function Row ({ rowId }) {
  const rowClass = classNames('row');
  const [tiles, setTiles] = useState(Array(10).fill({
    class: "",
    isClicked: false
  }));

  const onEnter = (index) => {
    if (!tiles[index].isClicked) {
      setTiles(prev => [...prev].map((tile, ind) => {
        if (index === ind) {
          return {...tile, class:"ship"};
        }
        return tile;
      }));
    };
  };

  const onLeave = (index) => {
    if (!tiles[index].isClicked) {
      setTiles(prev => [...prev].map((tile, ind) => {
        if (index === ind) {
          return {...tile, class: ""};
        }
        return tile;
      }));
    };
  };

  const onClick = (index) => {
    for (let i = 0; i < 5; i++) {
      setTiles(prev => [...prev].map((tile, ind) => {
        if (index + i === ind) {
          return {...tile, class: "ship", isClicked: true};
        }
        return tile;
      }));
    }
  };

  const row = [...Array(10).keys()].map(id => {
    return <Tile
              key={id}
              id={rowId.concat(id + 1)}
              status={tiles[id]}
              value={id}
              onClick={() => onClick(id)}
              onMouseEnter={() => onEnter(id)}
              onMouseLeave={() => onLeave(id)}
              />
  });

  return (
    <div className={rowClass}>
      {row}
    </div>
  );
};