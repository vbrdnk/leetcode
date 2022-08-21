class ParkingSystem {
  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType) {
    if (carType === 1) {
      if (this.big > 0) {
        this.big--;
        return true;
      }
    }

    if (carType === 2) {
      if (this.medium > 0) {
        this.medium--;
        return true;
      }
    }

    if (carType === 3) {
      if (this.small > 0) {
        this.small--;
        return true;
      }
    }

    return false
  }
}
