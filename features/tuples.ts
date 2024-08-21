const drink = {
  color: 'brown',
  carbonated: true,
  suger: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const coca: Drink = ['brown', true, 20];
const tea: Drink = ['brown', false, 0];

