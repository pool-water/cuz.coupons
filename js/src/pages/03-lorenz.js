import {LorenzApp} from "@pool-water/secret-sauce";
import {Page} from "./page.js";
import {Color} from "../colors.js";

import seedrandom from "seedrandom";

/**
 *
 */
export class LorenzPage extends Page {
  constructor(el, seed) {
    super(el, seed);

    const canvas = document.createElement("CANVAS");
    canvas.className = "backdrop";
    canvas.width = el.clientWidth;
    canvas.height = el.clientHeight;
    this.el.appendChild(canvas);

    console.log(canvas.width, canvas.height);

    this.app = new LorenzApp({
      el: canvas,
      ...this.features(),
    });
  }

  update() {
    this.app.update();
  }

  draw() {
    this.app.draw();
  }

  clear() {
    this.el.querySelectorAll(":scope > canvas").forEach((v) => {
      this.el.removeChild(v);
    });
  }

  features() {
    let prng = new seedrandom(this.seed);

    let h = Math.floor(prng()*360);
    let [s, l] = [70, 48];

    let col1 = new Color([h, s, l]);
    let col2 = new Color([(h + 140) % 360, s, l]);

    return {
      pos: [0.9, 0.0, 0.0],
      sigma: 10.0,
      rho: 20.74 + prng()*50.0,
      beta: 8.0/3.0,
      col1: col1.hex,
      col2: col2.hex,
    };
  }
}
