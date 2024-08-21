class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const carObj = new Car();
carObj.drive();
carObj.honk();

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
