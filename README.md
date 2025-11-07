
#  Alpaca Image Generator Website

A fun and interactive web app that allows users to **customize their own alpaca avatar** by mixing and matching features such as hair, eyes, mouth, accessories, and more — all with **pure HTML, CSS, and JavaScript**.

---

## 🚀 Live Demo

🔗 **[View Live Demo](https://seid-image-generator-website.vercel.app/)** 



---

## 📸 Preview  
*(Add a screenshot or GIF of your project here)*  
Example:  
![Alpaca Generator Preview on Large screen](./Images/computer%20size.png)
![Alpaca Generator Preview on Small screen](./Images/mobile%20size.png)
---




## ✨ Features

- 🎨 **Complete Customization** — Modify **8** different alpaca attributes:
  - Backgrounds  
  - Neck styles  
  - Ear positions  
  - Hair styles  
  - Eye expressions  
  - Mouth expressions  
  - Leg positions  
  - Accessories  
- 🔄 **Real-time Preview** — See your changes instantly as you customize  
- 🎲 **Random Generator** — Get instant inspiration with one click  
- 📥 **Export Functionality** — Download your creation as a high-quality PNG  
- 📱 **Responsive Design** — Works perfectly on desktop, tablet, and mobile  
- ⚡ **Modern UI** — Clean, professional interface with smooth animations  

---
## 🧭 Open Directly
Just open `index.html` in your browser — no server required!

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)  
- **Graphics:** [HTML2Canvas](https://html2canvas.hertzen.com/) for image export  
- **Styling:** Custom CSS with modern design principles  
- **Icons:** Emoji-based icons for cross-platform compatibility  
- **Responsive:** Mobile-first responsive design  

---

## 📦 Installation

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server for local development (optional)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/seid-sualeh/alpaca-image-generator.git
cd alpaca-image-generator

```






## 🎯 Usage

### 🧩 Basic Customization
1. Select a **category** (e.g., Hair, Eyes, Mouth, etc.) from the customization panel.  
2. Choose an **option** from the available styles.  
3. View changes **in real-time** in the preview area.  
4. Repeat for other categories to create your unique alpaca!

---

### ⚙️ Advanced Features
- 🎲 **Randomize** — Click “Randomize” to generate a random alpaca combination.  
- ⬇️ **Download** — Click “Download” to export your alpaca as a **PNG image**.

---

## 🖼️ Image Structure
The alpaca image is built using **layered PNG files** in the following order:

1. Background  
2. Neck  
3. Ears  
4. Hair  
5. Eyes  
6. Mouth  
7. Leg  
8. Accessories

---
## 📁 Directory Structure 

```bash
Alpaca-Image-Generator/
├── index.html
├── CSS/
│   └── style.css
├── Js/
│   └── script.js
└── Images/
    ├── accessories/
    ├── backgrounds/
    ├── ears/
    ├── eyes/
    ├── hair/
    ├── leg/
    ├── mouth/
    ├── neck/
    └── nose/

```




## ⚙️ Configuration Example
```bash
function changePart(part, option) {
  layers[part].src = `Images/${part}/${option}.png`;
}
```
## 🌐 Browser Compatibility  
# | Browser           | Version | Support    |
# | ----------------- | ------- | ---------- |
# | Chrome            | 60+     | ✅ Full     |
# | Firefox           | 55+     | ✅ Full     |
# | Safari            | 12+     | ✅ Full     |
# | Edge              | 79+     | ✅ Full     |
# | Internet Explorer | 11      | ⚠️ Limited |



## 📱 Performance

# ⚡ Load Time: < 3 seconds

# 🧠 Optimized memory management

# 🖼️ Lazy loading for images

# 📸 High-resolution PNG export (2× scale)




## 🏆 Acknowledgments

# 🧰 html2canvas – For image exporting

# 🖋️ Poppins Font – For modern typography

# 💡 Safaricom Talent Cloud – For inspiration & learning



<p align="center">
  Made with ❤️ by <strong>Seid Sualeh Mohammed</strong><br>
  <a href="https://github.com/seid-sualeh" target="_blank">🌐 GitHub Profile</a>
</p>
