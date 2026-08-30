export interface Star {
  position: {
    x: number; // 0 to 100, percentage of the width of the screen
    y: number; // 0 to 100, percentage of the height of the screen
  };
  size: number; // 0 to 1, percentage of the maximum size of the star
  brightness: number; // O to 100 opacity of the star
  flickerSpeed: number; // 0 to 1, speed of the flicker effect
}
