const phrases = [
  'a movement',
  'a mobile',
  'a medium'
];

let currentIndex = 0;
const rotateText = document.querySelector('.rotate-text');
const rotateContainer = document.querySelector('.rotate-container');

function createSparkles() {
  const rect = rotateText.getBoundingClientRect();
  const containerRect = rotateContainer.getBoundingClientRect();

  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle-dot';

    // Random position within the text area
    const x = Math.random() * rect.width;
    const y = rect.height * (0.4 + Math.random() * 0.5);

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.setProperty('--delay', `${Math.random() * 60}ms`);
    sparkle.style.setProperty('--scale-start', `${0.8 + Math.random() * 0.4}`);
    sparkle.style.setProperty('--scale-end', `${0.2 + Math.random() * 0.3}`);
    sparkle.style.setProperty('--dx', `${(Math.random() - 0.5) * 14}px`);
    sparkle.style.setProperty('--dy', `${8 + Math.random() * 10}px`);

    rotateContainer.appendChild(sparkle);

    // Remove after animation
    setTimeout(() => sparkle.remove(), 600);
  }
}

function rotatePhrase() {
  // Blur out
  rotateText.classList.add('blur-out');
  rotateText.classList.remove('blur-in');

  setTimeout(() => {
    // Change text
    currentIndex = (currentIndex + 1) % phrases.length;
    rotateText.textContent = phrases[currentIndex];

    // Blur in
    rotateText.classList.remove('blur-out');
    rotateText.classList.add('blur-in');
  }, 400);
}

// Start rotation
setInterval(rotatePhrase, 3000);

// Initial blur-in class
rotateText.classList.add('blur-in');
