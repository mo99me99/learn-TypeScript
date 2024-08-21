const carMakers = ['ford', 'benz', 'bmw'];
const dates = [new Date(), new Date()];

const carsByMake = [['f250'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatiable values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100) //error

