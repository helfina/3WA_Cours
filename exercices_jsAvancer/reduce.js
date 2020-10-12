const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.filter(number => number%2 === 0).reduce((curr,acc)=> curr + acc);
console.log(total);