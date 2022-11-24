import {Page} from "./page.js";

import seedrandom from "seedrandom";


export class TribalPage extends Page {

  constructor(el, seed) {
    super(el, seed);

    this.el.innerHTML = "";

    const table = document.createElement("TABLE");

    this.features().forEach((url) => {
      const img = new Image();
      img.src = url;

      const td = document.createElement("TD");
      td.appendChild(img);

      const tr = document.createElement("TR");
      tr.appendChild(td);

      table.appendChild(tr);
    });

    this.el.appendChild(table);

  }

  features() {
    let prng = new seedrandom(this.seed);
    let rands = [prng(), prng(), prng()];
    let urls = [];
    rands.forEach((r) => {
      let url = "/Tribal Array 3/Untitled-3-XXX.svg";
      let id = Math.floor(34*r)+1;
      id = id < 10 ? "0" + id : "" + id;
      let x = url.replace("XXX", id);
      urls.push(x);
    });
    return urls;
  }

}
