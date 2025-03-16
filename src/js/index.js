async function getSounds() {
  try {
    const response = await fetch('src/data/sounds.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading sounds:', error);
    return {};
  }
}

function playSound(soundSrc) {
  const audio = new Audio(soundSrc);
  audio.play();
}

const createButton = (text, className, onClick) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className);
  button.addEventListener('click', onClick);
  return button;
};

const generateAudioButtons = (sounds, filterBy = 'ALL') => {
  const buttonsContainer = document.querySelector('.buttons');
  buttonsContainer.innerHTML = '';

  Object.entries(sounds).forEach(([category, soundsList]) => {
    if (filterBy !== 'ALL' && category !== filterBy) return;

    const sectionTitle = document.createElement('h4');
    sectionTitle.textContent = category;
    sectionTitle.classList.add('section-title');
    buttonsContainer.appendChild(sectionTitle);

    soundsList.forEach(({ name, src }) => {
      const button = createButton(name, 'soundboard-button', () => playSound(src));
      buttonsContainer.appendChild(button);
    });
  });
};

const updateFilter = (event) => {
  const filterBy = event.target.dataset.filter;
  document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  getSounds().then(sounds => generateAudioButtons(sounds, filterBy));
};

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  const randomTheme = Math.floor(Math.random() * 4) + 1;
  document.body.classList.add(`theme-${randomTheme}`);

  const SOUNDS = await getSounds();
  generateAudioButtons(SOUNDS);
  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', updateFilter));
});