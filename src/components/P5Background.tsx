'use client';

import dynamic from 'next/dynamic'
import type p5Types from 'p5';

// Dynamically import react-p5-wrapper to avoid SSR issues
const ReactP5Wrapper = dynamic(
  () => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper),
  { ssr: false }
);

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
}

function sketch(p5: p5Types) {
  const particles: Particle[] = [];
  const numParticles = 1000;
  const scl = 20; // Scale of the flow field
  let cols: number;
  let rows: number;
  let zoff = 0;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(0);
    cols = p5.floor(p5.width / scl);
    rows = p5.floor(p5.height / scl);

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: p5.random(p5.width),
        y: p5.random(p5.height),
        vx: 0,
        vy: 0,
        alpha: 255
      });
    }
  };

  p5.draw = () => {
    p5.background(0, 10);
    let yoff = 0;

    // Update flow field
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        const angle = p5.noise(xoff, yoff, zoff) * p5.TWO_PI * 2;
        xoff += 0.1;
      }
      yoff += 0.1;
    }
    zoff += 0.001;

    // Update and draw particles
    particles.forEach(particle => {
      // Get flow field angle at particle position
      const x = p5.floor(particle.x / scl);
      const y = p5.floor(particle.y / scl);
      const angle = p5.noise(x * 0.1, y * 0.1, zoff) * p5.TWO_PI * 2;

      // Update velocity based on flow field
      particle.vx = p5.cos(angle) * 0.5;
      particle.vy = p5.sin(angle) * 0.5;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = p5.width;
      if (particle.x > p5.width) particle.x = 0;
      if (particle.y < 0) particle.y = p5.height;
      if (particle.y > p5.height) particle.y = 0;

      // Draw particle
      p5.noStroke();
      p5.fill(255, 40);
      p5.circle(particle.x, particle.y, 1);
    });
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    cols = p5.floor(p5.width / scl);
    rows = p5.floor(p5.height / scl);
  };
}

export default function P5Background() {
  return <ReactP5Wrapper sketch={sketch} />;
} 