import React, { useState } from "react";
import classNames from "classnames";

const STATUS_ENUM = Object.freeze({
  NORMAL: "normal",
  ACTIVE: "active",
  DEAD: "dead",
});

function Grid() {
  const [cells, setCells] = useState(
    Array.apply(null, Array(16)).map((cell, i) => ({
      id: i,
      status: STATUS_ENUM.NORMAL,
      kills: [],
    }))
  );

  const [active, setActive] = useState(null);
  const [deadCount, setDeadCount] = useState(0);

  const incrementDead = () => {
    setDeadCount(deadCount + 1);
  };

  const updateCellStatuses = (statuses) => {
    const sortedStatuses = statuses.sort((a, b) => (a.id > b.id ? 1 : -1));

    let currentIndex = sortedStatuses[0]?.id;
    const newCellArray = cells.map((cell, index) => {
      if (index === currentIndex) {
        const newCell = sortedStatuses.shift();
        currentIndex = sortedStatuses[0]?.id;
        return newCell;
      }
      return cell;
    });

    setCells(newCellArray);
  };

  const onCellClick = (i) => (e) => {
    const cell = cells[i];
    if (cell.status === STATUS_ENUM.ACTIVE) {
      updateCellStatuses([{ ...cell, status: STATUS_ENUM.NORMAL }]);
      setActive(null);
    } else if (cell.status === STATUS_ENUM.NORMAL) {
      if (active !== null) {
        const activeCell = cells[active];
        const currentActiveNum = Math.random();
        const newActiveNum = Math.random();
        if (currentActiveNum >= newActiveNum) {
          updateCellStatuses([
            { ...cell, status: STATUS_ENUM.DEAD },
            {
              ...activeCell,
              status: STATUS_ENUM.NORMAL,
              kills: [...activeCell.kills, i],
            },
          ]);
        } else {
          updateCellStatuses([
            { ...cell, status: STATUS_ENUM.NORMAL, kills: [...cell.kills, i] },
            { ...activeCell, status: STATUS_ENUM.DEAD },
          ]);
        }
        setActive(null);
        incrementDead();
      } else {
        updateCellStatuses([{ ...cell, status: STATUS_ENUM.ACTIVE }]);
        setActive(i);
      }
    }
  };

  const getWinners = () => {
    return cells.reduce((agg, cell) => {
      if (!agg[0] || cell.kills.length > agg[0].kills.length) {
        return [cell];
      } else if (cell.kills.length === agg[0].kills.length) {
        return [...agg, cell];
      } else {
        return agg;
      }
    }, []);
  };

  return (
    <React.Fragment>
      <div className="grid">
        {cells.map((cell, i) => (
          <div
            key={i}
            className={classNames({
              cell: true,
              ["cell--active"]: cell.status === STATUS_ENUM.ACTIVE,
              ["cell--dead"]: cell.status === STATUS_ENUM.DEAD,
            })}
            onClick={onCellClick(i)}
          >
            <p>Cell {cell.id + 1}</p>
            <p>Wins: {cell.kills.length}</p>
          </div>
        ))}
      </div>
      {deadCount >= 15 && (
        <React.Fragment>
          <p>Winners: </p>
          {getWinners().map((cell, i) => (
            <p key={i}>
              Cell {cell.id + 1} with {cell.kills.length} kills!
            </p>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Grid;
