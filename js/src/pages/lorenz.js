import {LorenzApp} from "@pool-water/secret-sauce";
import {Page} from "./page.js";

import seedrandom from "seedrandom";


/**
 *
 */
function features(seed) {
  let prng = new seedrandom(seed);
  return {
    flavor: "whatever",
    label: prng.int32() % 2 ? "waves" : "dots",
    orientation: prng.int32() % 2 ? "top" : "side",
    love: "what? is this the thing that we were always talking about?\n...probably. posionous tree frog",
    colors: [0x000000, 0x777777],
    loop: true,
  };
}

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

export default function LorenzAttach(seed) {
  const el = document.getElementById("page-06");
  const page = new LorenzPage(el, seed);
  return page;
}

