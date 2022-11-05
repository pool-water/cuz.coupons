import {default as Page01} from "./pages/page-01.js";
import {default as Page05} from "./pages/page-05.js";

const PAGES = new Array(16);

const RENDER = [];

export class NoApp {
  constructor() {}
  update() {}
  draw() {}
  on() {}
}

window.addEventListener("load", () => {

  // Initialize with empty apps
  for (let i=0; i < PAGES.length; i++) {
    PAGES[i] = new NoApp();
  }

  // Fill in cover page
  PAGES[0] = Page01();

  // ...
  PAGES[4] = Page05();

  // When ready add to render list
  PAGES[0].on("loaded", function() {
    RENDER.push(this);
  }.bind(PAGES[0]));

  // Start render loop
  (function animate() {
    requestAnimationFrame(animate);
    RENDER.forEach((app) => {
      app.update();
      app.draw();
    });
  }());

});
