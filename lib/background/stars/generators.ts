import { generateRandomNumber } from '../../utils';
import { type Star } from './types';
import { STAR_SIZE, STAR_FLICKER_SPEED } from './constants';

function generateStar(): Star {
  const position = {
    x: generateRandomNumber(0, 100),
    y: generateRandomNumber(0, 100),
  };
  const size = generateRandomNumber(STAR_SIZE.MIN, STAR_SIZE.MAX);
  const brightness = generateRandomNumber(0, 100);
  const flickerSpeed = generateRandomNumber(STAR_FLICKER_SPEED.MIN, STAR_FLICKER_SPEED.MAX);

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
