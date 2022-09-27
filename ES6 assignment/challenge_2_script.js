class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

class CarModel extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  displayInfo() {
    document.write(`I have a ${this.brand}, it is a ${this.model}`);
    document.write("<br />");
  }
}
const car1 = new CarModel("Ford", "Mustang");
const car2 = new CarModel("Lamborghini", "Huracan");
car1.displayInfo();
car2.displayInfo();
