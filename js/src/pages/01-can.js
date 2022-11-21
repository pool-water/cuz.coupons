import {CanCrusherApp} from "@pool-water/secret-sauce";
let seedrandom = require('seedrandom');

const COLORS = [
  [0x000000, 0x777777],
  [0x000000, 0xF5B11D],
];

const text = `Breaking through the sealed door, Carter found a passageway filled with stone and rubble. Clearing this passageway revealed another sealed door marked with the royal impressions of Tutankhamun. Carter was sure he had found the king's tomb, but he was afraid it may have been pillaged - its contents removed. On November 26th Carter, with Lord Carnarvon at his side, started to break through this second sealed door. It was, as Carter described, "the day of days, the most wonderful that I have ever lived through.`;

/**
 *
 */
function features(seed) {
  let prng = new seedrandom(seed);

  return {
    flavor: "whatever",
    label: prng.int32() % 2 ? "waves" : "dots",
    orientation: prng.int32() % 2 ? "top" : "side",
    love: text,
    colors: COLORS[Math.floor(prng()*COLORS.length)],
    loop: true,
  };
}

export default function CanCoverPage(seed) {

  // Generate canvas
  let canvas = document.createElement("CANVAS");

  // Attach to #page-01
  let el = document.getElementById("page-01");

  el.querySelectorAll(":scope > canvas").forEach((v) => {
    el.removeChild(v);
  });

  el.appendChild(canvas);

  let app = new CanCrusherApp({
    el: canvas,
    ...features(seed),
  });


  const w = el.offsetWidth;
  const h = el.offsetHeight;

  console.log(w, h);

  canvas.width = w;
  canvas.height = h;
  app.setSize(w, h);

  return app;
}
