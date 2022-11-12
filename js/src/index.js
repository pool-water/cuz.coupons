import {default as Page01} from "./pages/page-01.js";
import {default as Page05} from "./pages/page-05.js";
import {default as LorenzAttach} from "./pages/lorenz.js";

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
  PAGES[5] = LorenzAttach();

  RENDER.push(PAGES[5]);

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

  // Interpolate between to vec3 points
  function interpolat3(start, end, t) {
    let [x0, y0, z0] = start;
    let [x1, y1, z1] = end;
    let x = x0 + t*(x1-x0);
    let y = y0 + t*(y1-y0);
    let z = z0 + t*(z1-z0);
    return [Math.floor(x), Math.floor(y), Math.floor(z)];
  }

  // scroll
  window.addEventListener("scroll", () => {
    const v = interpolat3(
      [255, 165, 0],
      [255, 255,255],
      getScrollPercent(),
    );
    const c = "rgb(" + v.join(", ") + ")";
    document.querySelector("HTML").style.scrollbarColor = c + " transparent";
  });

});

/**
 * Get Scroll Percent
 *
 * Return the %-scrolled. 0.00 at top and 1.00 at bottom.
 */
function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}
