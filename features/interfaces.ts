interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary():string {
    return this.name + this.year + ' is borken:' + this.broken;
  },
};

const drinkObj = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar.`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

// printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(drinkObj);
