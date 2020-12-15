// ---------------------------------
// DOM Elements
// ---------------------------------

const slideTrack = qs(".all-slides");

// ---------------------------------
// Variables
// ---------------------------------

// Mouse
const mouse = {
  x: 0,
  y: 0
};

// SlideTrack
const slideTrackPos = {
  x: rect(slideTrack).x,
  y: rect(slideTrack).y,
  center: rect(slideTrack).width / 2
};

// ---------------------------------
// Program
// ---------------------------------

doclistener("mousemove", updateMouse);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  slideTrackPos.x = lerp(slideTrackPos.x, mouse.x, 0.08);

  slideTrack.style.transform = `
  translateX(${slideTrackPos.x - slideTrackPos.center}px)
  skewX(${(mouse.x - slideTrackPos.x) / 80}deg)
  `;
}
animate();

// ---------------------------------
// Functions
// ---------------------------------
function updateMouse(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

// ---------------------------------
// Utilities
// ---------------------------------
function qs(x) {
  return document.querySelector(x);
}

function qsa(x) {
  return document.querySelectorAll(x);
}

function log(x) {
  console.log(x);
}
function log2(x, y) {
  console.log(x, y);
}

function doclistener(event, func) {
  document.addEventListener(event, func);
}

function winlistener(event, func) {
  window.addEventListener(event, func);
}

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function rect(x) {
  return x.getBoundingClientRect();
}
