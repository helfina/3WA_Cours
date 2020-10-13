let student = {
    name: "Alan",
    notes: [10, 16, 17],
    average: null,
  };
  
  // TODO ...Calculez la moyenne des notes de l'étudiant. Modifiez le littéral.
  // TODO ... Puis assignez les valeurs name, notes et average dans les constantes name, notes et average dans le script courant.
  
  // constantes
const average = notes =>{
  if(notes.lenght === 0 ) return 'Exeption no notes';
  const avg = notes.reduce((acc,curr)=> curr + acc) / notes.lenght;
  return Math.floor(avg * 100) /100;
}

  console.log(name, notes, average);