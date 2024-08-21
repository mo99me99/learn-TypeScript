interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: 2000,
  broken: true,
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
  console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken: ${vehicle.broken}
    `);
};

printVehicle(oldCivic);
logVehicle(oldCivic);
