// no2script.js

const container = document.getElementById('broken-hearts');
const emojis = ['💔', '❤️‍🩹', '🥀'];
const noBtn = document.getElementById('noBtn');

// Floating hearts animation
function createFallingHeart() {
  const heart = document.createElement('div');
  heart.className = 'falling-heart';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${4 + Math.random() * 4}s`;
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.fontSize = `${16 + Math.random() * 20}px`;
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}
setInterval(createFallingHeart, 300);

// Move "No" button away on hover
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * 300;
  const y = Math.random() * 150;
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
