import React, { useState } from "react";

const generateBoard = (size) => {
  const newBoard = [];
  for (let i = 0; i < size; i++) {
    newBoard.push([...Array(size)]);
  }
  return newBoard;
};

const Tictactoe = () => {
  const [board, setBoard] = useState(generateBoard(3));
  const [currPlayer, setCurrPlayer] = useState("x");
  const [whoWins, setWhoWins] = useState("");
  console.log("board", board);

  const checkHorizontal = (board) => {
    for (let row of board) {
      const rowSet = new Set(row);
      if (rowSet.size === 1 && !rowSet.has(undefined)) {
        return true;
      }
    }
  };

  const rowsToColumn = (board) => {
    const newBoard = [];
    let column = 0;
    while (column < board?.length) {
      const newArr = [];
      for (let row = 0; row < board?.length; row++) {
        newArr.push(board[row][column]);
      }
      newBoard.push(newArr);
      column++;
    }
    return newBoard;
  };

  const diagonalToRow = (board) => {
    const newBoard = [[], []];
    let increment = 0;
    let decrement = board?.length - 1;
    while (increment < board?.length) {
      newBoard[0].push(board[increment][increment]);
      newBoard[1].push(board[increment][decrement]);
      increment++;
      decrement--;
    }
    return newBoard;
  };

  const checkForWin = (board) => {
    //  horizontal
    if (checkHorizontal(board)) {
      return true;
    }
    if (checkHorizontal(rowsToColumn(board))) {
      return true;
    }
    // vertical
    if (checkHorizontal(diagonalToRow(board))) {
      return true;
    }
  };

  const handleClick = (row, col) => {
    console.log("r,c", row, col);
    board[row][col] = currPlayer;
    setBoard([...board]);
    if (checkForWin(board)) {
      console.log(currPlayer + "wins");
      setWhoWins(`${currPlayer} wins`);
      setBoard(generateBoard(3));
      setCurrPlayer("x");
      return;
    } else {
      setCurrPlayer((prev) => (prev === "x" ? "y" : "x"));
    }
  };

  return (
    <div className="tictactoe-wrapper">
      {board.map((row, r) => (
        <div key={r} style={{ display: "flex" }}>
          {row?.map((cell, c) => (
            <div
              style={{
                border: "1px solid black",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={c}
              onClick={() => handleClick(r, c)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
      <h1>{whoWins}</h1>
    </div>
  );
};

export default Tictactoe;
