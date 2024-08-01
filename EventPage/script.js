const stripColors = ['s9-grain-sand', 's9-grain-blue', 's9-grain-green'];

const container = document.getElementById('moving-strips-container');
const s9LandingContentContainer = document.getElementsByClassName('s9-landing-content-container')[0];

let stripHeight5vh = Math.floor(window.innerHeight / 20); // 5vh
let randomColorVal = Math.floor(Math.random() * stripColors.length);
const randomStripColor = stripColors[randomColorVal];

const maxSpeed = 3;

console.log(stripHeight5vh);

function updateHeight() {
  totalHeightInPx = s9LandingContentContainer.getBoundingClientRect().height;
  stripHeight5vh = Math.floor(window.innerHeight / 20);
  console.log('Updated Height:', totalHeightInPx);
}

function clearContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createStrip(stripIndex) {
  const strip = document.createElement('div');
  strip.classList.add(randomStripColor, 'moving-strip');

  strip.style.top = `${stripIndex * stripHeight5vh}px`;

  const randomOffset = Math.random() * window.innerWidth;
  strip.style.backgroundPosition = `${randomOffset}px 0`;

  const minSpeed = 3;
  const maxSpeed = 10;
  const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  const duration = 1000 / speed;

  strip.style.animation = `slide ${duration}s linear infinite`;

  return strip;
}

function manageStrips() {
  updateHeight();
  clearContainer();
  const height = totalHeightInPx;

  const numStrips = Math.ceil(height / stripHeight5vh);

  for (let stripCount = 0; stripCount < numStrips; stripCount++) {
    const strip = createStrip(stripCount);
    container.appendChild(strip);
  }

  const stripWidth = container.offsetWidth;
  const offsetX = (window.innerWidth - stripWidth) / 2;
  container.style.backgroundPosition = `${-offsetX}px center`;
}

window.addEventListener('load', () => {
  updateHeight();
  manageStrips();
});

const resizeObserver = new ResizeObserver(() => {
  manageStrips();
});

resizeObserver.observe(document.body); // Observing the body to detect changes in window size

setTimeout(() => {
  manageStrips();
}, 10);

// const stripColors = ['s9-grain-sand', 's9-grain-blue', 's9-grain-green'];

// const container = document.getElementById('moving-strips-container');
// const stripHeight = 5;
// const totalHeight = 100;
// const numStrips = totalHeight / stripHeight;
// const maxSpeed = 3;
// const randomColorVal = Math.floor(Math.random() * 3);
// const randomStripColor = stripColors[randomColorVal];

// function landingButtonColor(randomColorVal) {
//   if (randomColorVal === randomColorVal.length - 1) {
//     return 0;
//   } else {
//     return randomColorVal + 1;
//   }
// }

// function setLandingButtonColor() {
//   let color = (document.getElementsByClassName('landing-main-button').style.backgroundColor = landingButtonColor());
// }

// function createStrip(stripIndex) {
//   const strip = document.createElement('div');
//   strip.classList.add(randomStripColor, 'moving-strip');

//   strip.style.top = `${stripIndex * stripHeight}svh`;

//   const randomOffset = Math.random() * window.innerWidth;
//   strip.style.backgroundPosition = `${randomOffset}px 0`;

//   const minSpeed = 3;
//   const maxSpeed = 10;
//   const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
//   const duration = 1000 / speed;

//   strip.style.animation = `slide ${duration}s linear infinite`;

//   return strip;
// }

// function manageStrips() {
//   const strips = Array.from(container.children);
//   const viewportHeight = window.innerHeight;

//   strips.forEach(strip => {
//     const rect = strip.getBoundingClientRect();

//     if (rect.top > viewportHeight || rect.bottom < 0) {
//       // strip.style.opacity = 0;

//       setTimeout(() => {
//         strip.remove();
//       }, 1);
//     }
//   });

//   const existingStrips = strips.length;
//   const neededStrips = numStrips - existingStrips;

//   for (let stripCount = 0; stripCount < neededStrips; stripCount++) {
//     const strip = createStrip(stripCount + existingStrips);
//     container.appendChild(strip);
//   }

//   // Center the container background based on the viewport
//   const stripWidth = container.offsetWidth;
//   const offsetX = (window.innerWidth - stripWidth) / 2;
//   container.style.backgroundPosition = `${-offsetX}px center`;
// }

// manageStrips();

// window.addEventListener('scroll', manageStrips);
// window.addEventListener('resize', manageStrips);

// setInterval(manageStrips, 10000);

// const resizeObserver = new ResizeObserver(() => {
//   manageStrips();
// });

// resizeObserver.observe(container);
