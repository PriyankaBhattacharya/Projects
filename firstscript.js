document.getElementById("yesBtn").addEventListener("click", () => {
  window.location.href = "yes.html";
});

document.getElementById("noBtn").addEventListener("click", () => {
  window.location.href = "no.html";
});
// Heart background generator
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  heart.style.width = heart.style.height = `${10 + Math.random() * 20}px`;

  heart.style.backgroundColor = "rgba(255,192,203,0.6)";
  heart.style.zIndex = "0";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);
