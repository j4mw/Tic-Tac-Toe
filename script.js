"use strict";
let turn = 1;

const activePlayerX = document.getElementById("playerX");
const activePlayerO = document.getElementById("playerO");
// player object
const player = (sym) => {
  return { sym };
};

// gameboard module
const gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  return {
    board,
  };
})();

// generate players
// TODO add option to change player symbol
const updateArray = (cellIndex, board, currentPlayer) => {
  console.log(cellIndex);
  if (board[cellIndex] == "") {
    board[cellIndex] = currentPlayer;
    console.log(board);
  }
};

const checkWinner = () => {
  let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combination of winCombinations) {
    if (
      cells[combination[0]].textContent !== "" &&
      cells[combination[0]].textContent == cells[combination[1]].textContent &&
      cells[combination[1]].textContent == cells[combination[2]].textContent &&
      cells[combination[2]].textContent == cells[combination[0]].textContent
    )
      return true;
  }
  return false;
};

const checkCurrentPlayer = (turn) => {
  if (turn % 2 != 1) {
    console.log("O");
    activePlayerX.classList.add("live");
    activePlayerO.classList.remove("live");
    return "O";
  } else {
    activePlayerX.classList.remove("live");
    activePlayerO.classList.add("live");
    console.log("X");
    return "X";
  }
};

//event listeners
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) =>
  cell.addEventListener("click", (e) => {
    if (e.target.textContent !== "") {
      return;
    } else {
      const cellIndex = e.target;
      let currentPlayer = checkCurrentPlayer(turn);
      cellIndex.textContent = currentPlayer;
      updateArray(cellIndex.dataset.key, gameboard.board, currentPlayer);
      if (checkWinner(gameboard.board)) {
      } else turn++;
      console.log("turn:" + turn);
    }
  })
);
