"use strict";

document.body.insertAdjacentHTML("afterbegin", `<textarea class="text-frame" placeholder="The window for creating lyrics"></textarea>`);
document.body.insertAdjacentHTML("beforeend", `<div class="scale"></div>`);


const container = document.querySelector(".text-frame");
const scale = document.querySelector(".scale");

scale.addEventListener('mousedown', e => {
  scale.style.position = 'unset';
  scale.style.display = 'none';
  container.style.cursor = 'se-resize';
  container.addEventListener('mousemove', change);
});

function change (e) {
  let newWidth = e.clientX;
  let newHeight = e.clientY;
  container.style.width = newWidth + 'px';
  container.style.height = newHeight + 'px';
};

container.addEventListener('mouseup', e => {
  scale.style.position = 'absolute';
  scale.style.display = 'block';
  container.style.cursor = 'unset';
  container.removeEventListener('mousemove', change);
});
