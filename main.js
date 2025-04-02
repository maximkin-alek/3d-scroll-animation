// 3d scroll

const zSpacing = -1000;
let lastPos = zSpacing / 5;
const $frames = document.getElementsByClassName('frame');
const frames = Array.from($frames);
const zVals = [];

console.log(frames);
window.onscroll = function () {
  const top = document.documentElement.scrollTop;
  let delta = lastPos - top;
  lastPos = top;

  console.log(delta);

  frames.forEach((n, i) => {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -3;
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing / 1.5) ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 2);
