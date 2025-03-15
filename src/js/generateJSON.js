const fs = require('fs');
const path = require('path');

const soundsPath = path.resolve(__dirname, '../media/sounds');
const outputPath = path.resolve(__dirname, '../data/sounds.json');

const soundsJSON = fs.readdirSync(soundsPath).reduce((acc, folder) => {
  const folderPath = path.join(soundsPath, folder);

  if (fs.statSync(folderPath).isDirectory()) {
    const soundFiles = fs
      .readdirSync(folderPath)
      .filter((file) => path.extname(file) === '.mp3');

    acc[folder.toUpperCase()] = soundFiles.map((file) => ({
      name: path.basename(file, '.mp3'),
      src: `/src/media/sounds/${folder}/${file}`,
    }));
  }

  return acc;
}, {});

fs.writeFileSync(outputPath, JSON.stringify(soundsJSON, null, 2));
console.log('✅ Sounds JSON generated!');