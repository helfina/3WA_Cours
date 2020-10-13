const students = [
    {
      name: "Alan",
      family: {
        mother: "Isa",
        father: "Philippe",
        syster: "Sylvie",
      },
      age: 35,
    },
    {
      name: "Bernard",
      family: {
        mother: "Particia",
        father: "Cécile",
        syster: "Annie",
      },
      age: 55,
    },
  ];
const nom = student.name(students=>({name : students.name, syster : students.syster}));
console.log(nom);