document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('open-letter-btn');
  const letter = document.querySelector('.letter-card');

  btn.addEventListener('click', () => {
    btn.style.display = 'none';
    letter.classList.add('open');
  });
});

const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 2,
    vy: Math.random() * 2 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    size: Math.random() * 4 + 2,
    life: Math.random() * 100 + 100
  };
}

for (let i = 0; i < 150; i++) {
  particles.push(createParticle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    if (p.life <= 0 || p.y > canvas.height) {
      particles[index] = createParticle();
    }

    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
