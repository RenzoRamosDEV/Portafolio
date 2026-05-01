/**
 * Estela de partículas tipo "estrella" que sigue al cursor.
 *
 * Diseñado como efecto puro de UI: no expone API ni hooks, sólo se
 * adjunta a un canvas y arranca su propio loop con requestAnimationFrame.
 *
 * Limita el pool de partículas a 180 para evitar caídas de FPS en
 * sesiones largas con mucho movimiento del mouse.
 *
 * @param {HTMLCanvasElement} canvas - Canvas a tamaño viewport donde dibujar.
 */
export function initCursorTrail(canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -999, y: -999 };

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Spawn 2-3 estrellitas en la posición del ratón
    for (let i = 0; i < 3; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.2 + 0.3;
      particles.push({
        x:     mouse.x + (Math.random() - 0.5) * 6,
        y:     mouse.y + (Math.random() - 0.5) * 6,
        vx:    Math.cos(angle) * speed,
        vy:    Math.sin(angle) * speed - 0.6, // ligero drift hacia arriba
        size:  Math.random() * 2.5 + 0.8,
        alpha: Math.random() * 0.3 + 0.15,
        decay: Math.random() * 0.018 + 0.012,
      });
    }

    // Cap del pool: descarta las más antiguas si crecemos sobre 180.
    if (particles.length > 180) particles.splice(0, particles.length - 180);
  });

  /** Dibuja una estrella tipo "cruz" con núcleo brillante. */
  function drawStar(x, y, size, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(200,180,255,0.8)';
    ctx.shadowBlur = size * 3;

    // Núcleo
    ctx.beginPath();
    ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
    ctx.fill();

    // Destellos en cruz (horizontal + vertical)
    ctx.fillRect(x - size * 2.5, y - size * 0.2, size * 5, size * 0.4);
    ctx.fillRect(x - size * 0.2, y - size * 2.5, size * 0.4, size * 5);

    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      drawStar(p.x, p.y, p.size, p.alpha);

      // Integración + amortiguamiento + fade
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.alpha -= p.decay;
      p.size  *= 0.985;

      if (p.alpha <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(draw);
  }

  draw();
}
