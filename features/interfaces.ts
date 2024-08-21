interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return this.name + this.year + ' is borken:' + this.broken;
  },
};


const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

// printVehicle(oldCivic);
printSummary(oldCivic);
