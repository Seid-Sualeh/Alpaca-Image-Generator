// ======================================================
//  ALPACA IMAGE GENERATOR SCRIPT
// Author: Seid Sualeh Mohammed
// Description: A fun project to customize and download my Alpaca image
// Technologies: HTML, CSS, Pure JavaScript, html2canvas library
// ======================================================

// ======================================================
// 🔹 1. Define all Alpaca customization options
// ======================================================
const alpacaOptions = {
  backgrounds: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow70",
  ],
  neck: ["default", "bend-backward", "bend-forward", "thick"],
  ears: ["default", "tilt-backward", "tilt-forward"],
  eyes: ["default", "angry", "naughty", "panda", "smart", "star"],
  hair: ["bang", "curls", "default", "short", "elegant", "fancy", "quiff"],
  mouth: ["default", "laugh", "astonished", "eating", "tongue"],
  leg: [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ],
  accessories: ["earings", "flower", "glasses", "headphone"],
  nose: ["nose", "none"],
};

// ======================================================
// 🔹 2. Connect each Alpaca part to its <img> layer
// ======================================================
const layers = {
  backgrounds: document.getElementById("background"),
  neck: document.getElementById("neck"),
  ears: document.getElementById("ears"),
  eyes: document.getElementById("eyes"),
  hair: document.getElementById("hair"),
  mouth: document.getElementById("mouth"),
  leg: document.getElementById("leg"),
  nose: document.getElementById("nose"),
  accessories: document.getElementById("accessories"),
};

// ======================================================
// 🔹 3. Get references to UI buttons and containers
// ======================================================
const categoryButtons = document.querySelectorAll(".categories button");
const optionsContainer = document.getElementById("options-container");

// ======================================================
// 🔹 4. Show Options when a Category is Clicked
// ======================================================
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // Highlight the active category
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Clearing old options
    optionsContainer.innerHTML = "";

    // Dynamically create new option buttons
    alpacaOptions[category].forEach((option) => {
      const optBtn = document.createElement("button");
      optBtn.textContent = option;

      // When an option is clicked → change Alpaca part
      optBtn.addEventListener("click", () => changePart(category, option));
      optionsContainer.appendChild(optBtn);
    });
  });
});

// ======================================================
// 🔹 5. Function to Change Alpaca Part Image
// ======================================================
function changePart(part, option) {
  layers[part].src = `Images/${part}/${option}.png`;
}

// ======================================================
// 🔹 6. Randomize All Alpaca Parts
// ======================================================
function randomizeAlpaca() {
  Object.keys(alpacaOptions).forEach((part) => {
    const randomOption =
      alpacaOptions[part][
        Math.floor(Math.random() * alpacaOptions[part].length)
      ];
    changePart(part, randomOption);
  });
}

// ======================================================
// 🔹 7. Download Final Alpaca as PNG Image
// ======================================================
function downloadAlpaca() {
  const node = document.querySelector(".alpaca-preview");

  // Convert the alpaca area into a canvas image
  html2canvas(node).then((canvas) => {
    const link = document.createElement("a");
    link.download = "my-alpaca.png";
    link.href = canvas.toDataURL();
    link.click(); 
  });
}

// ======================================================
// 🔹 8. Attach Event Listeners for Buttons
// ======================================================
document
  .getElementById("random-btn")
  .addEventListener("click", randomizeAlpaca);
document
  .getElementById("download-btn")
  .addEventListener("click", downloadAlpaca);
