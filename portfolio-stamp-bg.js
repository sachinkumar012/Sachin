// Portfolio SVG Stamps for background
function addPortfolioStamps() {
  const bg = document.createElement('div');
  bg.className = 'portfolio-stamp-bg';
  bg.innerHTML = `
    <svg class="stamp1" viewBox="0 0 220 220">
      <circle cx="110" cy="110" r="90" stroke-dasharray="8 8" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="32" font-family="monospace" fill="#1da1f2" opacity="0.5">{ }</text>
    </svg>
    <svg class="stamp2" viewBox="0 0 220 220">
      <rect x="30" y="30" width="160" height="160" rx="30" stroke-dasharray="12 8" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="28" font-family="monospace" fill="#1da1f2" opacity="0.5">&lt;/&gt;</text>
    </svg>
    <svg class="stamp3" viewBox="0 0 220 220">
      <polygon points="110,30 200,190 20,190" stroke-dasharray="10 6" />
      <text x="50%" y="60%" text-anchor="middle" dy=".3em" font-size="28" font-family="monospace" fill="#1da1f2" opacity="0.5">JS</text>
    </svg>
    <svg class="stamp4" viewBox="0 0 220 220">
      <ellipse cx="110" cy="110" rx="90" ry="60" stroke-dasharray="7 7" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="28" font-family="monospace" fill="#1da1f2" opacity="0.5">PORTFOLIO</text>
    </svg>
  `;
  document.body.appendChild(bg);
}
window.addEventListener('DOMContentLoaded', addPortfolioStamps);
