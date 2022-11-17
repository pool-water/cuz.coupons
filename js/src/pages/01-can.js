import {CanApp} from "@pool-water/secret-sauce";
let seedrandom = require('seedrandom');


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

export default function CanCoverPage(seed) {

  // Generate canvas
  let canvas = document.createElement("CANVAS");
  canvas.height = 600;
  canvas.width = 600;

  // Attach to #page-01
  let el = document.getElementById("page-01");
  el.innerHTML = "";
  el.appendChild(canvas);

  let app = new CanApp({
    el: canvas,
    ...features(seed),
  });

  app.on("loaded", () => {
    const SEQUENCE = ["LABEL_ZOOM", "SELF_TERMINATE"];
    app.schedule(SEQUENCE);
    app.sequencer.begin();
    app.update(+new Date());
    app.draw();
  });

  app.setSize(el.offsetWidth, el.offsetHeight);

  return app;
}
