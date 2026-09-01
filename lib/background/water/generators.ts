import { generateRandomNumber, lerp } from "../../utils"
import type { Wave } from "./types"
import {
  WAVE_WIDTH,
  WAVE_HEIGHT,
  WAVE_POSITION,
  WAVE_OPACITY,
  WAVE_DENSITY,
  WAVE_PERSPECTIVE_GAMMA,
} from "./constants"

function closeness(y: number): number {
  return y / WAVE_POSITION.Y.MAX
}

function falloff(t: number): number {
  return Math.pow(1 - t, WAVE_PERSPECTIVE_GAMMA)
}

function generateBandWaves(y: number): Wave[] {
  const t = closeness(y)
  const width = lerp(WAVE_WIDTH.FAR, WAVE_WIDTH.NEAR, t)
  const height = generateRandomNumber(WAVE_HEIGHT.MIN, WAVE_HEIGHT.MAX)

  const desiredCount = Math.round(WAVE_DENSITY * falloff(t))

  const maxCountForWidth = Math.floor(WAVE_POSITION.X.MAX / width)
  const count = Math.max(0, Math.min(desiredCount, maxCountForWidth))

  if (count === 0) return []

  const slotWidth = WAVE_POSITION.X.MAX / count

  const waves: Wave[] = []
  for (let slot = 0; slot < count; slot++) {
    const slotStart = slot * slotWidth
    const x = generateRandomNumber(slotStart, slotStart + slotWidth - width)

    waves.push({
      key: Date.now() + Math.random(),
      opacity: generateRandomNumber(WAVE_OPACITY.MIN, WAVE_OPACITY.MAX),
      movementSpeed: generateRandomNumber(0.1, 1),
      dimensions: { x: width, y: height },
      position: { x, y },
    })
  }

  return waves
}

function generateWaves(): Wave[] {
  const waves: Wave[] = []
  for (let y = WAVE_POSITION.Y.MIN; y <= WAVE_POSITION.Y.MAX; y += WAVE_POSITION.STEP) {
    waves.push(...generateBandWaves(y))
  }
  return waves
}

export { generateWaves }
