import {Page} from "./page.js";

import seedrandom from "seedrandom";

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

    let prng = new seedrandom(this.seed);

    const container = el;
    const grid = generateTable(3, "big");
    grid.name = grid.id = "sudoku";
    grid.className = "sudoku";

    grid.querySelectorAll(":scope td").forEach((el) => {
      const tab = generateTable(3, "small");
      tab.className = "subgrid";
      el.appendChild(tab);

      tab.querySelectorAll(":scope td").forEach((cell) => {
        const input = document.createElement("INPUT");
        input.maxLength = 1;
        input.size = 1;
        input.type = "tel";
        input.className = "sudoku-entry";

        if (prng() < 0.5) {
          input.value = Math.floor(1+8*prng());
        }


        cell.appendChild(input);
      });
    });

    el.appendChild(grid);
  }
}
