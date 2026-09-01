import type { BuildingAttributes, BuildingInterface } from "./types";

class DefaultBuilding implements BuildingInterface {
  constructor(public props: BuildingAttributes){}

  render(): void {
    const a = 1
  }
}