interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary():string
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(){
    return this.name + this.year + ' is borken:' + this.broken
  }
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}) => {
  console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken: ${vehicle.broken}
    `);
};

const logVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.summary());
};

// printVehicle(oldCivic);
logVehicle(oldCivic);
