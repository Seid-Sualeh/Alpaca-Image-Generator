// ===============================
// ALPACA IMAGE GENERATOR LOGIC
// ===============================

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
    "yellow60",
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

const categoryButtons = document.querySelectorAll(".categories button");
const optionsContainer = document.getElementById("options-container");

// ===============================
// 🔹 1. Show Options by Category
// ===============================
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // highlight active category
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // clear old options
    optionsContainer.innerHTML = "";

    // add new options
    alpacaOptions[category].forEach((option) => {
      const optBtn = document.createElement("button");
      optBtn.textContent = option;
      optBtn.addEventListener("click", () => changePart(category, option));
      optionsContainer.appendChild(optBtn);
    });
  });
});

// ===============================
// 🔹 2. Change Alpaca Part
// ===============================
function changePart(part, option) {
  layers[part].src = `Images/${part}/${option}.png`;
}









// ===============================
// 🔹 3. Randomize All Layers
// ===============================
function randomizeAlpaca() {
  Object.keys(alpacaOptions).forEach((part) => {
    const randomOption =
      alpacaOptions[part][
        Math.floor(Math.random() * alpacaOptions[part].length)
      ];
    changePart(part, randomOption);
  });
}




document
  .getElementById("random-btn")
  .addEventListener("click", randomizeAlpaca);