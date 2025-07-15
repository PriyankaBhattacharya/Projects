// noscript.js

// Falling heart emoji animation
const container = document.getElementById('broken-hearts');
const emojis = ['💔', '❤️‍🩹', '🥀'];

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

// Redirect to no2.html on clicking No
document.getElementById('noBtn').addEventListener('click', () => {
  window.location.href = 'no2.html';
});

// Optional: Redirect "Yes" to a happy page
document.getElementById('yesBtn').addEventListener('click', () => {
  window.location.href = 'yes.html';
});
