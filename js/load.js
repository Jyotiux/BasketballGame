// load.js
console.log("Assets available in load.js:", window.assets);

const loader = document.getElementById("loader");
const gameArea = document.getElementById("gameArea");

let loadedCount = 0;
const totalAssets = Object.keys(window.assets).length;

function onAssetLoaded(name) {
  loadedCount++;
  console.log(`✅ ${name} loaded (${loadedCount}/${totalAssets})`);

  if (loadedCount === totalAssets) {
    console.log("🎮 All assets loaded");
    loader.style.display = "none";
    gameArea.style.display = "block";
    startGame();
    // resizeGameArea();
    // resizeObjects();
  }
}

function onAssetError(name, src) {
  console.error(`❌ Failed to load ${name}: ${src}`);
}

Object.entries(window.assets).forEach(([name, asset]) => {
  asset.img.onload = () => onAssetLoaded(name);
  asset.img.onerror = () => onAssetError(name, asset.img.src);
});
