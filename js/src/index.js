import {default as CanCoverPage} from "./pages/01-can.js";
import {TribalPage} from "./pages/02-tribals.js";
import {default as Page05} from "./pages/page-05.js";
import {default as LorenzPage} from "./pages/lorenz.js";
import {getScrollPercent, isInViewport} from "./utils.js";

const PAGES = new Array(16);

const RENDER = [];

export class NoApp {
  constructor() {}
  update() {}
  draw() {}
  on() {}
}

/**
 *
 */
function Init(seed) {


  // Initialize with empty apps
  for (let i=0; i < PAGES.length; i++) {
    if (PAGES[i] && PAGES[i].clear) {
      console.log("Clearing", i, "...");
      PAGES[i].clear();
    }

    PAGES[i] = new NoApp();
  }

  // Fill in cover page
  PAGES[0] = CanCoverPage(seed);
  PAGES[1] = new TribalPage(document.getElementById("page-02"), seed);

  // ...
  PAGES[4] = Page05(seed);
  PAGES[5] = LorenzPage(seed);

  RENDER.push(PAGES[5]);

  // When ready add to render list
  PAGES[0].on("loaded", function() {
    RENDER.push(this);
  }.bind(PAGES[0]));
}


// Interpolate between to vec3 points
function interpolat3(start, end, t) {
  let [x0, y0, z0] = start;
  let [x1, y1, z1] = end;
  let x = x0 + t*(x1-x0);
  let y = y0 + t*(y1-y0);
  let z = z0 + t*(z1-z0);
  return [Math.floor(x), Math.floor(y), Math.floor(z)];
}

function randomString() {
  let s = "";
  for (let i=0; i < 10; i++) {
    s += String.fromCharCode(65 + 26*Math.random());
  }
  return s;
}

let KEY = "cuz.coupons-seed";

/**
 * Get Seed
 *
 * Return a seed...
 */
function getSeed() {

  if (localStorage.getItem(KEY) === null) {
    localStorage.setItem(KEY, randomString());
  }

  return localStorage.getItem(KEY);
}

function setSeed(val) {
  localStorage.setItem(KEY, val);
}


window.addEventListener("load", () => {

  document.getElementById("seed").value = getSeed();

  document.getElementById("seed").addEventListener("change", (ev) => {
    setSeed(ev.target.value);
    Init(getSeed());
  });


  // Initialize and setup render loop
  // ...
  // ...


  Init(getSeed());

  // Start render loop
  (function animate() {
    requestAnimationFrame(animate);
    RENDER.forEach((app) => {
      if (isInViewport(app.el)) {
        app.update();
        app.draw();
      }
    });
  }());

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
