// Bubble Background Animation
function createBubbles(num = 18) {
  const container = document.createElement("div");
  container.className = "bubble-background";
  for (let i = 0; i < num; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    // Make bubbles very small: 8px to 18px
    const size = Math.random() * 10 + 8;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.bottom = `-${size + Math.random() * 40}px`;
    bubble.style.animationDelay = `${Math.random() * 6}s`;
    container.appendChild(bubble);
  }
  document.body.appendChild(container);
}
window.addEventListener("DOMContentLoaded", () => createBubbles());
