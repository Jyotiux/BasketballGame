// /* =========================
//    CONSTANTS & DOM
// ========================= */

const BASE_WIDTH = 400;
const BASE_HEIGHT = 400;

// const gameArea = document.getElementById("gameArea");

let ball, basket, base;


/* =========================
   GAME OBJECTS
========================= */

// ---------- BALL ----------
ball = {
  element: document.createElement("img"),
  size: 0,
  x: 0,
  y: 0,

  // 🔥 movement state
  vy: 0,
  gravity: 0,

  init() {
    this.element.src = assets.ball.img.src;
    this.element.style.position = "absolute";
    gameArea.appendChild(this.element);
  },

  resize(w, h) {
    this.size = w * assets.ball.scale;
    this.element.width = this.size;
    this.element.height = this.size;

    this.x = (w - this.size) / 2;
    //start from top of gameArea initially
    this.y = 0;

    this.vy = 0; // reset velocity on resize
    this.gravity = h * 0.00009;

    this.render();
  },

  update(h) {
    // 🎯 GAME LOGIC
    this.vy += this.gravity;
    this.y += this.vy;

    // stop at bottom (temporary ground)
    const groundY =  base.y - this.size;
    if (this.y > groundY) {
      this.y = groundY;
      this.vy = 0;
    }

    this.render();
  },

  render() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
};



// ---------- BASKET ----------
basket = {
  element: document.createElement("img"),
  width: 0,
  height: 0,
  x: 0,
  y: 0,

  init() {
    this.element.src = assets.basket.img.src;
    this.element.style.position = "absolute";
    gameArea.appendChild(this.element);
  },

  resize(w, h) {
    this.width = w * assets.basket.scale;
    this.height = this.width * 0.7;

    this.element.width = this.width;
    this.element.height = this.height;

    this.x = (w - this.width) / 2;
    this.y = h * 0.1;

    this.render();
  },

  render() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
};


// ---------- BASE (GROUND) ----------
base = {
  element: document.createElement("img"),
  width: 0,
  height: 0,
  x: 0,
  y: 0,

  init() {
    this.element.src = assets.base.img.src;
    this.element.style.position = "absolute";
    gameArea.appendChild(this.element);
  },

  resize(w, h) {
    this.width = w;
    this.height = h * 0.08;

    this.element.width = this.width;
    this.element.height = this.height;

    this.x = 0;
    this.y = h * 0.925;

    this.render();
  },

  render() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
};


/* =========================
   LAYOUT / RESPONSIVE LOGIC
========================= */

function isMobile() {
  return window.innerWidth <= 600;
}

function resizeGameArea() {
  const screenW = window.innerWidth;
  const screenH = isMobile()
    ? document.documentElement.clientHeight // excludes browser UI
    : window.innerHeight;  

  let scale;

  if (screenW <= 600) {
    // 📱 Small screens

    gameArea.style.width = `${screenW}px`;
    gameArea.style.height = `${screenH}px`;
    console.log("Small screen screenW:", screenW, "screenH:", screenH);


  } else if (screenW <= 899 && screenW > 600) {
    // 💻 Medium screens
    scale = Math.min(screenW / BASE_WIDTH, screenH / BASE_HEIGHT) * 0.7;
    gameArea.style.width = `${BASE_WIDTH * scale}px`;
    gameArea.style.height = `${BASE_HEIGHT * scale}px`;

  } else {
    // 🖥️ Large screens
    scale = Math.min(screenW / BASE_WIDTH, screenH / BASE_HEIGHT) * 0.8;
    gameArea.style.width = `${BASE_WIDTH * scale * 1.3}px`;
    gameArea.style.height = `${BASE_HEIGHT * scale}px`;
  }
}


/* =========================
   GAME RESIZE HANDLER
========================= */

function resizeObjects() {
  const w = gameArea.clientWidth;
  const h = gameArea.clientHeight;

  ball.resize(w, h);
  basket.resize(w, h);
  base.resize(w, h);
}


/* =========================
   GAME LIFECYCLE
========================= */

function startGame() {
  ball.init();
  basket.init();
  base.init();

  resizeGameArea();
  resizeObjects();

  requestAnimationFrame(gameLoop); // 🔥 start loop
}




/* =========================
   EVENTS
========================= */

window.addEventListener("resize", () => {
  resizeGameArea();
  resizeObjects();
});



//gameloop

let lastTime = 0;

function gameLoop(time) {
  const h = gameArea.clientHeight;

  ball.update(h);

  requestAnimationFrame(gameLoop);
}

