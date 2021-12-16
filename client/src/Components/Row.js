import React from 'react';
import classNames from 'classnames';

// Components
import Tile from './Tile';

// Stylesheets
import './Row.scss';

export default function Row ({ rowId, onClick, onEnter, onLeave, board }) {
  const rowClass = classNames('row');

  const row = [...Array(10).keys()].map(id => {
    return <Tile
              key={id}
              id={rowId * 10 + id}
              status={board[rowId * 10 + id]}
              value={id}
              onClick={() => onClick(rowId * 10 + id)}
              onMouseEnter={() => onEnter(rowId * 10 + id)}
              onMouseLeave={() => onLeave(rowId * 10 + id)}
              />
  });

  return (
    <div className={rowClass}>
      {row}
    </div>
  );
};

// const onEnter = (index) => {
//   for (let i = 0; i < 5; i++) {
//     if (index + 4 < 10 && !tiles[index + i].isClicked) {
//       setTiles(prev => [...prev].map((tile, ind) => {
//         if (index + i === ind) {
//           return {...tile, class: "ship"};
//         }
//         return tile;
//       }));
//     } else {
//       setTiles(prev => [...prev].map((tile, ind) => {
//         if (index + i === ind) {
//           return {...tile, class: "hit"};
//         }
//         return tile;
//       }));
//     };
//   };
// };

// const onLeave = (index) => {
//   for (let i = 0; i < 5; i++) {
//     if (index + i < 10 && !tiles[index + i].isClicked) {
//       setTiles(prev => [...prev].map((tile, ind) => {
//         if (index + i === ind) {
//           return {...tile, class: ""};
//         }
//         return tile;
//       }));
//     }

//     if (index + i < 10 && tiles[index + i].isClicked) {
//       setTiles(prev => [...prev].map((tile, ind) => {
//         if (index + i === ind) {
//           return {...tile, class: "ship"};
//         }
//         return tile;
//       }));
//     }
//   };
// };

// const onClick = (index, tileId) => {
//   console.log(tileId);
//   for (let i = 0; i < 5; i++) {
//     setTiles(prev => [...prev].map((tile, ind) => {
//       if (index + i === ind) {
//         return {...tile, class: "ship", isClicked: true};
//       }
//       return tile;
//     }));
//   }
// };