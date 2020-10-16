let fruits =  ['Apple', 'Orange'];

let newFruits = fruits;

newFruits.push('Banana')

console.log(newFruits.length === fruits.length)
//Ecrivez un script pour créez un nouveau tableau newFruit qui n'a pas la même référence que fruits.
 let newFruits1 = fruits.map( fruit => fruit);
 newFruits1.push('pomme');
 console.log(newFruits1);
