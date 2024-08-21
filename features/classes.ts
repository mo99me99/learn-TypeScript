class Vehicle {
  protected honk(): void {
    console.log('beep');
  }

}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carObj = new Car();
carObj.startDrivingProcess();

const vehicle = new Vehicle();
