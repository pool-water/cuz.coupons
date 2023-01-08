import {sudoku} from "../robatron/sudoku.js";
import {Page} from "./page.js";

function generateTable(n, className) {
  const table = document.createElement("TABLE");
  for (let i=0; i < n; i++) {
    const row = document.createElement("TR");
    table.appendChild(row);
    for (let j=0; j < n; j++) {
      const cell = document.createElement("TD");
      row.appendChild(cell);
      cell.className = className || "";
    }
  }

  return table;
}

function generateHTMLFromPuzzle(puzzle) {
  const grid = generateTable(3, "big");
  grid.name = grid.id = "sudoku";
  grid.className = "sudoku";

  let grd = sudoku.board_string_to_grid(puzzle);
  // let sol = sudoku.board_string_to_grid(this.solution);

  grid.querySelectorAll(":scope td").forEach((el, i) => {
    const tab = generateTable(3, "small");
    tab.className = "subgrid";
    el.appendChild(tab);

    const superRow = Math.floor(i/3);
    const superCol = i % 3;

    tab.querySelectorAll(":scope td").forEach((cell, j) => {

      const subRow = Math.floor(j/3);
      const subCol = j % 3;


      const input = document.createElement("INPUT");
      input.maxLength = 1;
      input.size = 1;
      input.type = "tel";
      input.className = "sudoku-entry";

      const y = 3*superRow + subRow;
      const x = 3*superCol + subCol;

      input.value = grd[y][x] != "." ? grd[y][x] : "";

      cell.appendChild(input);
    });
  });

  return grid;
}

export class SudokuPage extends Page {
  constructor(el, seed) {
    super(el, seed);

    el.innerHTML = "";

    sudoku.set_seed(seed);
    this.puzzle = sudoku.generate("hard");
    this.solution = sudoku.solve(this.puzzle);

    const container = el;

    let puzzleGrid = generateHTMLFromPuzzle(this.puzzle);
    el.appendChild(puzzleGrid);

    let solvedGrid = generateHTMLFromPuzzle(this.solution);
    solvedGrid.id = solvedGrid.name = "sudoku-solved";
    solvedGrid.className = "sudoku-solved";
    el.appendChild(solvedGrid);


  }
}
