import {LorenzApp} from "@pool-water/secret-sauce";

export default function LorenzAttach() {

  const el = document.getElementById("page-06");

  const canvas = document.createElement("CANVAS");
  canvas.className = "backdrop";
  canvas.width = el.clientWidth;
  canvas.height = el.clientHeight;

  let app = new LorenzApp({el: canvas});

  el.appendChild(canvas);


  return app;
}

