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

export class SudokuPage extends Page {
  constructor(el, seed) {
    super(el, seed);

    const container = el;
    const grid = generateTable(3, "big");
    grid.name = grid.id = "sudoku";
    grid.className = "sudoku";

    console.log(grid.querySelectorAll(":scope > td"));

    el.appendChild(grid);
  }
}
