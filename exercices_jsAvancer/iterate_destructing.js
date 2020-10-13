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
for(const{name, family} of students){
console.log("nom :" ,name, " soeur :" ,family.syster);
}