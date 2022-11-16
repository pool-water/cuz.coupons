/**
 * Page
 */
export class Page {
  constructor(el, seed) {
    this.el = el;
    this.seed = seed;
    this.app = undefined;
  }

  update() {
  }

  draw() {
  }

  clear() {
  }

  features() {
    throw "Need to implement features";
  }
}
