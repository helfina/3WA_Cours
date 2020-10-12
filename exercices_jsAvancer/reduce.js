const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const powerNumbers = numbers.map(number => number%2 ? number : number**3);
console.log(powerNumbers);