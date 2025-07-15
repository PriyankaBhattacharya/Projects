document.getElementById("yesBtn").addEventListener("click", () => {
  window.location.href = "yes.html";
});

document.getElementById("noBtn").addEventListener("click", () => {
  window.location.href = "no.html";
});
  const container = document.getElementById('heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (10 + Math.random() * 10) + 's';
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 20000); // Cleanup after animation
}

// Start creating hearts slowly
setInterval(createHeart, 500);
