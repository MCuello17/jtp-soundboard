# JTP Soundboard

Welcome to the **unofficial Join The Party soundboard**! 

This is a fan-made soundboard built with love for the **Join The Party** podcast community. Huge thanks to the JTP team for providing the sounds via their official Patreon Discord!

🎧 [Visit the Join The Party Podcast website!](https://www.jointhepartypod.com/)

---

## 🎧 Features

- **Play iconic quotes and sounds from your favorite JTP hosts!**
- **Category filtering**: Quickly switch between sounds for Amanda, Brandon, Eric, and Julia.
- **Automatic button generation**: New sounds are detected and added when you update the sounds folder and run the script.
- **Dynamic theme switching**: The website adapts its color scheme to match each campaign's vibe.
- **Old-school aesthetic**: Designed to evoke the nostalgic feel of early 2000s Flash websites.

---

## 💻 Tech Stack

- **Vanilla HTML, CSS, and JavaScript** — no frameworks, just pure code!
- **Node.js** for generating the soundboard JSON data.

---

## 🔨 Setup

1. Clone this repo.

2. Install Node.js (if you haven't already).

3. Add your sound files:
   - Place your MP3 files inside `src/media/sounds/`
   - Organize them into subfolders by speaker, e.g., `src/media/sounds/AMANDA/AH.mp3`

4. Generate the JSON file:
   ```bash
   node ./src/js/generateJSON.js
   ```

5. Open `index.html` in your favorite browser and enjoy!

---

## 🎉 Example Folder Structure

```
/src
  └── media
      └── sounds
          ├── AMANDA
          │   ├── AH.mp3
          │   ├── DEVILS BUTTHOLE.mp3
          │   └── GASP.mp3
          ├── BRANDON
          │   └── WOAH.mp3
          └── ERIC
              └── EH.mp3
```

---

## 💚 Acknowledgments

Massive thanks to the Join The Party team for providing the sounds and allowing this project to exist.

📢 If you’re not already listening to the podcast, go fix that immediately: [Join The Party](https://www.jointhepartypod.com/)

