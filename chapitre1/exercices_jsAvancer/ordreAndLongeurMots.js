//Ordonnez par ordre croissant de nombre de lettres le tableau students ci-dessous :
const students = ["Alan" , "Phillippe", "tony" , "Geraldine" , "Michelle", "phi" ];

console.log(students.sort((a, b) => a.length - b.length));

