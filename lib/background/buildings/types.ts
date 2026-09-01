interface Building {
  key: number,
  width: number,
  height: number,
  xPosition: number,
  antenna: {
    xPosition: number,
    height: number
  },
  roof: {
    height: number,
    width: number,
    xPosition: number,
  },
}