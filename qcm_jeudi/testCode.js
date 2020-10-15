const populations = [
    { id: 1, name: "Alan" , relation : {
        name : "Alice", age : 45
    }},
     { id: 2, name: "Yvette" , relation : {
        name : "Michel", age : 95
    }},
  ];

// const age = populations.relation.age
// const { relation : { age } } = populations
const { relation : { age } } = populations[1]
// const { age } = populations.relation
console.log({ relation : { age } });
//---------------------------------------------
// const relation = {
//     id : 1, relation : [1, 2, 4]
// }
// const { relation : r } = relation;
// const sum = r.reduce((acc, curr) => acc + curr, -7 ) ;
// console.log(sum);
//-----------------------------------------------
// let a = 1, b = 2, c = 3, d = 4 ;
// [d, c, b, a] = [a, b, c, d];
// console.log(a,b,c,d);
//----------------------------------------------------
// const st1 = { s1: "Alan", s2: "Alice" };
// const st2 = { s2: "Bernard", s4: "Sophie" };

// const stMerge = { ...st1, ...st2 };

// console.log(stMerge);
//----------------------------------------------------
// const t1 = [1, 2];
// const t2 = t1;
// t1.push(3);
// console.log(t1);