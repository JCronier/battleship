import React, { useState } from 'react';
import classNames from 'classnames';

// Components
import Row from './Row';

// Stylesheets
import './Board.scss';

export default function Board() {
  const boardClass = classNames('board');
  const [tiles, setTiles] = useState(Array(100).fill({
    class: "",
    isClicked: false
  }));

  const [invalidPlacement, setInvalidPlacement] = useState(false);

  const multiplier = 1;
  const ship = 5;

  // const onEnter = (index) => {
  //   const rowIndex = index % 10;
  //   for (let i = 0 * multiplier; i < ship * multiplier; i+=multiplier) {
  //     if (rowIndex + ship <= 10 && !tiles[index + i].isClicked) {
  //       setTiles(prev => [...prev].map((tile, ind) => {
  //         if (index + i === ind) {
  //           return {...tile, class: "ship"};
  //         }
  //         return tile;
  //       }));
  //     } else {
  //       setTiles(prev => [...prev].map((tile, ind) => {
  //         if (index + i === ind && ind < Math.floor(index / 10) * 10 + 10) {
  //           return {...tile, class: "hit"};
  //         }
  //         return tile;
  //       }));
  //     };
  //   };
  // };

  // const onLeave = (index) => {
  //   const rowIndex = index % 10;
  //   for (let i = 0 * multiplier; i < ship * multiplier; i+=multiplier) {
  //     if (rowIndex + ship <= 10 && !tiles[index + i].isClicked) {
  //       setTiles(prev => [...prev].map((tile, ind) => {
  //         if (index + i === ind && ind < Math.floor(index / 10) * 10 + 10) {
  //           return {...tile, class: ""};
  //         }
  //         return tile;
  //       }));
  //     }

  //     if (rowIndex + i < 10 && tiles[index + i].isClicked) {
  //       setTiles(prev => [...prev].map((tile, ind) => {
  //         if (index + i === ind && ind < Math.floor(index / 10) * 10 + 10) {
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

  const onEnter = (index) => {
    setInvalidPlacement(false);
    const rowIndex = index % 10;
    for (let i = 0 * multiplier; i < ship * multiplier; i += multiplier) {
      if (rowIndex + ship <= 10 && !tiles[index + i].isClicked) {
        setTiles(prev => [...prev].map((tile, ind) => {
          if (index + i === ind) {
            return { ...tile, class: "ship" };
          }
          return tile;
        }));
      } else {
        setInvalidPlacement(true);
      }
    };
  };

  const onLeave = (index) => {
    const rowIndex = index % 10;
    for (let i = 0 * multiplier; i < ship * multiplier; i += multiplier) {
      if (rowIndex + ship <= 10 && !tiles[index + i].isClicked) {
        setTiles(prev => [...prev].map((tile, ind) => {
          if (index + i === ind && ind < Math.floor(index / 10) * 10 + 10) {
            return { ...tile, class: "" };
          }
          return tile;
        }));
      }

      if (rowIndex + i < 10 && tiles[index + i].isClicked) {
        setTiles(prev => [...prev].map((tile, ind) => {
          if (index + i === ind && ind < Math.floor(index / 10) * 10 + 10) {
            return { ...tile, class: "ship" };
          }
          return tile;
        }));
      }
    };
  };

  const onClick = (index, tileId) => {
    console.log(tileId);
    for (let i = 0; i < 5; i++) {
      setTiles(prev => [...prev].map((tile, ind) => {
        if (index + i === ind && !invalidPlacement) {
          return { ...tile, class: "ship", isClicked: true };
        }
        return tile;
      }));
    }
  };

  const board = [...Array(10).keys()].map(rowId => {
    return (
      <Row
        key={rowId}
        rowId={rowId}
        onClick={onClick}
        onEnter={onEnter}
        onLeave={onLeave}
        board={[...tiles]}
      />
    );
  });

  return (

    <div className={boardClass}>
      {invalidPlacement && <p>Invalid Placement</p>}
      {!invalidPlacement && <p>Valid Placement</p>}
      {board}
    </div>
  );
};