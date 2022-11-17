import {LorenzApp} from "@pool-water/secret-sauce";
import {Page} from "./page.js";

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
    return {
      pos: [0.1, 0.0, 0.0],
      sigma: 10.0,
      rho: 10.74 + prng()*20.0,
      beta: 8.0/3.0,
    };
  }
}
