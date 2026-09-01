export interface BuildingAttributes {
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

export interface BuildingInterface {
  props: BuildingAttributes,
  render(): void,
}
