import { type Star } from './types';
import { STAR_SIZE, STAR_FLICKER_SPEED } from './constants';

function generateStar(): Star {
  const position = {
    x: Math.random() * 100,
    y: Math.random() * 100,
  };
  const size = Math.random() * (STAR_SIZE.MAX - STAR_SIZE.MIN) + STAR_SIZE.MIN;
  const brightness = Math.random() * 100;
  const flickerSpeed =
    Math.random() * (STAR_FLICKER_SPEED.MAX - STAR_FLICKER_SPEED.MIN) +
    STAR_FLICKER_SPEED.MIN;

  return {
    key: Date.now() + Math.random(),
    position,
    size,
    brightness,
    flickerSpeed,
  };
}

function generateStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push(generateStar());
  }
  return stars;
}

export { generateStars };
