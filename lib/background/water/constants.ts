const WAVE_WIDTH = {
  FAR: 3,
  NEAR: 12,
}

const WAVE_HEIGHT = {
  MIN: 1,
  MAX: 2,
}

const WAVE_POSITION = {
  X: {
    MAX: 100,
    MIN: 0,
  },
  Y: {
    MAX: 100,
    MIN: 10,
  },
  STEP: 5,
}

const WAVE_OPACITY = {
  MAX: 0.8,
  MIN: 0.6,
}

// Number of waves in the farthest band
const WAVE_DENSITY = 2

// Speed at which the number of waves decreases with distance.
const WAVE_PERSPECTIVE_GAMMA = 0.8

export {
  WAVE_WIDTH,
  WAVE_HEIGHT,
  WAVE_POSITION,
  WAVE_OPACITY,
  WAVE_DENSITY,
  WAVE_PERSPECTIVE_GAMMA,
}
