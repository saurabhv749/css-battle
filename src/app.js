import anime from "animejs";

import "./style.scss";

const items = document.querySelectorAll(".main");

function animate(e) {
  anime({
    targets: e.target.children,
    scale: [0.9, 1.1, 1],
    rotate: [-5, 5, 0],
    elasticity: 0.5,
    duration: 1200,
    easing: "easeInOutSine",
  });
}

items.forEach((el) =>
  el.addEventListener("mouseover", animate, { capture: true, passive: false })
);
