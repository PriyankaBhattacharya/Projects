// yes2script.js

const container = document.querySelector('.hearts');
const emojis = [ '💗', '💞', '💘'];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${18 + Math.random() * 14}px`;
  heart.style.animationDuration = `${3 + Math.random() * 3}s`;
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);
