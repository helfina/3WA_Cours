//1.Inversez la chaîne de caractères sentence ci-après.
// let mots  = "sentence ";
// let inverser = mots.split('').reverse().join('');
//2.Comptez la longueur de chaque mot.
// let t = inverser.length;
// console.log(inverser);
// console.log(t);
//3.Faites un script qui prend en argument message (texte) et qui retourne un tableau des valeurs du nombre de caractères de chaque mot. Vous ne compterez pas les esapces comme un caractère.

const sentence = "Bonjour tout le monde, vous aimez JS ?";
let rev = sentence.split('').reverse().join('');
const lenW = sentence.map(w => w.length);
// console.log(lenW);
const taille = [];
const tab = [...sentence];
const letter = new Set(sentence);
for (const letter of letters){
    console.log(letter);
    taille.push(tab.filter(l => l == letter).length);
}
console.log(taille);
