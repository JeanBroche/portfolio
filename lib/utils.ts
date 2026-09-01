function generateRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function lerp(min: number, max: number, t: number): number {
  return min + (max - min) * t
}

export { generateRandomNumber, lerp };