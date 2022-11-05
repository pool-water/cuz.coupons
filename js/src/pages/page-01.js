import {CanApp} from "@pool-water/secret-sauce";

export default function Page01() {
  let canvas = document.createElement("CANVAS");
  canvas.height = 600;
  canvas.width = 600;

  let el = document.getElementById("page-01");
  el.appendChild(canvas);

  let app = new CanApp({
    el: canvas,
    flavor: "whatever",
    label: "waves",
    orientation: "top",
    love: "what? is this the thing that we were always talking about?\n...probably. posionous tree frog",
    colors: [0x000000, 0x777777],
    loop: true,
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
