const BASE_WIDTH = 400;
const BASE_HEIGHT = 400;

// let ball, basket, base;


// function resizeObjects() {
//   const gameArea = document.getElementById("gameArea");
//   const gameWidth = gameArea.clientWidth;
//   const gameHeight = gameArea.clientHeight;

//   ball.resize(gameWidth, gameHeight);
//   basket.resize(gameWidth, gameHeight);
//   base.resize(gameWidth, gameHeight);
// }


function resizeGameArea() {
  const gameArea = document.getElementById("gameArea");
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;
  console.log("Screen WIdth", screenW, "Height", screenH);

  let scale;

  if (screenW <= 600) {

    gameArea.style.width = screenW + "px";
    gameArea.style.height = screenH + "px";
    // scale = screenW / BASE_WIDTH;
    // console.log("Small screen detected :", scale);
  } else if (screenW <= 899 && screenW > 600) {
  // 💻 Medium screens (tablet / small laptop)
  const scale = Math.min(
    screenW / BASE_WIDTH,
    screenH / BASE_HEIGHT
  ) * 0.7;

  gameArea.style.width = BASE_WIDTH * scale + "px";
  gameArea.style.height = BASE_HEIGHT * scale + "px";

  console.log("Medium screen detected:", scale);

}
else {
  // 🖥️ Large screens (desktop ≥ 900px)
  const scale = Math.min(
    screenW / BASE_WIDTH,
    screenH / BASE_HEIGHT
  ) * 0.8;

  gameArea.style.width = BASE_WIDTH * scale *1.3+ "px";
  gameArea.style.height = BASE_HEIGHT * scale + "px";

  console.log("Large screen detected:", scale);
}

  // gameArea.dataset.scale = scale;

  // console.log(`Game area resized: ${gameArea.style.width} x ${gameArea.style.height} (scale: ${scale})`);
}




function startGame() {
  console.log("Game started!");

  const gameArea = document.getElementById("gameArea");
  const gameWidth = gameArea.clientWidth;
  const gameHeight = gameArea.clientHeight;


  // ---------- BALL OBJECT -------- --
  const ball = {
    element: document.createElement("img"),
    size: gameWidth * assets.ball.scale,
    x: 0,
    y: 0,

    init() {
      this.element.src = assets.ball.img.src;
      this.element.width = this.size;
      this.element.height = this.size;
      this.element.style.position = "absolute";

      this.x = (gameWidth - this.size) / 2;
      //start ball from top of base
      this.y = (gameHeight - this.size) * 0.9;

      this.updatePosition();
      gameArea.appendChild(this.element);
    },
    //   resize(gameWidth, gameHeight) {
    // this.size = gameWidth * assets.ball.scale;

    // this.element.width = this.size;
    // this.element.height = this.size;

    // this.x = (gameWidth - this.size) / 2;
    // this.y = (gameHeight - this.size) * 0.9;

    // this.updatePosition();
    // },


    updatePosition() {
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
    }
  };

  // ---------- BASKET OBJECT ----------
  const basket = {
    element: document.createElement("img"),
    width: gameWidth * assets.basket.scale,
    height: 0,
    x: 0,
    y: 0,

    init() {
      this.height = this.width * 0.7;

      this.element.src = assets.basket.img.src;
      this.element.width = this.width;
      this.element.height = this.height;
      this.element.style.position = "absolute";

      this.x = (gameWidth - this.width) / 2;
      this.y = gameHeight * 0.1;

      this.updatePosition();
      gameArea.appendChild(this.element);
    },
  //   resize(gameWidth, gameHeight) {
  //   this.width = gameWidth * assets.basket.scale;
  //   this.height = this.width * 0.7;

  //   this.element.width = this.width;
  //   this.element.height = this.height;

  //   this.x = (gameWidth - this.width) / 2;
  //   this.y = gameHeight * 0.1;

  //   this.updatePosition();
  // },

    updatePosition() {
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
    }
  };

  //-----------BASE OBJECT -----------
    const base = {
    element: document.createElement("img"),
    width: gameWidth,
    height: gameHeight * 0.05,
    x: 0,
    y: 0,

    init() {
      this.height = gameHeight * 0.08;

      this.element.src = assets.base.img.src;
      this.element.width = this.width;
      this.element.height = this.height;
      this.element.style.position = "absolute";

      this.x = (gameWidth - this.width) / 2;
      this.y = gameHeight * 0.925;

      this.updatePosition();
      gameArea.appendChild(this.element);
    },
  //    resize(gameWidth, gameHeight) {
  //   this.width = gameWidth;
  //   this.height = gameHeight * 0.08;

  //   this.element.width = this.width;
  //   this.element.height = this.height;

  //   this.x = 0;
  //   this.y = gameHeight * 0.925;

  //   this.updatePosition();
  // },

    updatePosition() {
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
    }
  };

  // Initialize objects
  ball.init();
  basket.init();
  base.init();
}


// window.addEventListener("load", () => {
//   resizeGameArea();
//   startGame();
// });

window.addEventListener("resize", () => { 
  resizeGameArea(); 
  // ball.updatePosition(); 
  // basket.updatePosition(); 
  // base.updatePosition(); 
});

// window.addEventListener("resize", () => {
//   resizeGameArea();   // updates container size
//   resizeObjects();    // updates all assets
// });
