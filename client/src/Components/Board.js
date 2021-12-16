import React, { useState } from 'react';
import useKeypress from 'react-use-keypress';
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

  const [multiplier, setMultiplier] = useState(1);
  const [currentShip, setCurrentShip] = useState(5);

  const [invalidPlacement, setInvalidPlacement] = useState(false);

  const toggleAlignment = () => {
    setTiles(prev => {
      return [...prev].map(tile => {
        if(tile.isClicked) {
          return tile;
        }
        return {
          ...tile,
          class: ""
        };
      });
    });
    multiplier < 10 ? setMultiplier(10) : setMultiplier(1);
  };

  useKeypress('r', () => toggleAlignment());


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

  const onEnter = (index) => {
    setInvalidPlacement(false);
    const verticalOffset = multiplier < 10? 0 : index % 10;
    const rowIndex = multiplier < 10 ? index % 10: index;

    for (let i = 0; i < currentShip; i++) {
      if (rowIndex + currentShip * multiplier <= 10 * multiplier + verticalOffset  && !tiles[index + i * multiplier].isClicked) {
        setTiles(prev => [...prev].map((tile, ind) => {
          if (index + i * multiplier === ind) {
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
    const verticalOffset = multiplier < 10? 0 : index % 10;
    const rowIndex = multiplier < 10 ? index % 10: index;
    for (let i = 0; i < currentShip; i++) {
      if (rowIndex + currentShip * multiplier <= 10 * multiplier + verticalOffset && !tiles[index + i * multiplier].isClicked) {
        setTiles(prev => [...prev].map((tile, ind) => {
          if (index + i * multiplier === ind && ind < (Math.floor(index / 10) * 10 + 10) * multiplier) {
            return { ...tile, class: "" };
          }
          return tile;
        }));
      }

      if (rowIndex + currentShip * multiplier <= 10 * multiplier + verticalOffset && tiles[index + i].isClicked) {
        setTiles(prev => [...prev].map((tile, ind) => {
          if (index + i === ind && ind < Math.floor(index / 10) * 10 + 10) {
            return { ...tile, class: "ship" };
          }
          return tile;
        }));
      }
    };
  };

  const onClick = (index) => {
    for (let i = 0; i < currentShip; i++) {
      setTiles(prev => [...prev].map((tile, ind) => {
        if (index + i * multiplier === ind && !invalidPlacement) {
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