// assets.js
// assets.js
window.assets = {
  ball: {
    img: new Image(),
    scale: 0.15   // 5% of game width
  },
  basket: {
    img: new Image(),
    scale: 0.25   // 15% of game width
  },
  base: {
    img: new Image(),
    scale: 0.25   // 15% of game width
  },
};


// BALL IMAGE
assets.ball.img.onload = () => {
  assets.ball.loaded = true;
  console.log("✅ Ball image loaded");
};

assets.ball.img.onerror = () => {
  console.error("❌ Ball image failed to load");
};

// BASKET IMAGE
assets.basket.img.onload = () => {
  assets.basket.loaded = true;
  console.log("✅ Basket image loaded");
};

assets.basket.img.onerror = () => {
  console.error("❌ Basket image failed to load");
};

// BASE IMAGE
assets.base.img.onload = () => {
  assets.base.loaded = true;
  console.log("✅ Base image loaded");
};

assets.base.img.onerror = () => {
  console.error("❌ Base image failed to load");
};

// Image paths
assets.ball.img.src = "/img/ball.png";
assets.basket.img.src = "/img/basket.png";
assets.base.img.src = "/img/base.avif";

console.log(window.assets);