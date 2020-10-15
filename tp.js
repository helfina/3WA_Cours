const populations = [
    {
        id: 0,
        name: "Alan",
        jobs: ['dev junior', 'dev fullstack'],
        password: "tyeedsa00"
    },
    {
        id: 1,
        name: "Albert",
        jobs: ['doctor'],
        password: "tyeidii00"
    },
    {
        id: 2,
        name: "Jhon",
        jobs: ['mathematician', 'doctor'],
        password: "xyuuuoi00"
    },
    {
        id: 3,
        name: "Brice",
        jobs: ['dev fullstack'],
        password: "xytoiab00"
    },
    {
        id: 4,
        name: "Alexendra",
        jobs: ['dentist'],
        password: "aaaoiab33"
    },
    {
        id: 5,
        name: "Brad"
    },
    {
        id: 6,
        name: "Carl",
        jobs: ['lead dev', 'dev fullstack']
    },
    {
        id: 7,
        name: "Dallas",
        jobs: ['dev fullstack']
    },
    {
        id: 8,
        name: "Dennis",
        jobs: ['integrator', 'dev fullstack']
    },
    {
        id: 9,
        name: "Edgar",
        jobs: ['mathematician']
    },
    {
        id: 10,
        name: "Erika",
        jobs: ['computer scientist', 'mathematician']
    },
    {
        id: 11,
        name: "Isaac",
        jobs: ['doctor'],
        password: "Axgkj22Kl"
    },
    {
        id: 12,
        name: "Ian",
        password: "Axgkj00Kl"
    },
];

// 1. Comptez tous les docteurs.

//recupere les job en creant un map
const job = populations.map( population => population.jobs );
console.log(job, '------------------');
// filtre les doctor 
const doct = job.filter(j => j != undefined).filter(j =>j.includes('doctor'));
console.log(doct.length);

// 2. Récupérez les noms des développeurs fullstack.
const devFS = [];
populations.map(person => {
    if (person.jobs != undefined && person.jobs.includes('dev fullstack'));
    devFS.push(person.name);
});
console.log(devFS, '------------------');
// 3. Récupérez les noms des personnes qui n'ont jamais travaillés.
const noJobs = [];
populations.map(person => {
    if (person.jobs == undefined)
        noJobs.push(person.name);
});
console.log(noJobs, '------------------');
// 4. Etudiez les mots de passe de chaque personne, comptez leurs occurences pour chaque lettre distincte.
//4.1 recupere les mdp si existe avc le name de la persone
const persWhitPass = populations.filter(person => person.password != undefined).map(person =>({name : person.name, password : person.password}));
 console.log('-------------',persWhitPass);
 //4.2 compte les occurrence pour chaque lettre distincte
const countOccurence = (phrase) => {
    const letters = new Set(phrase);
const statistic = [];
const sentencesArray = [ ...phrase ];
for(const letter of letters){

    const count = sentencesArray.filter( l => l === letter).length;

    statistic.push( { letter, count });
}
return statistic;
}

for(const person of persWhitPass){
    // console.log(countOccurence(person.password));
    person.occurences = countOccurence(person.password);
}
console.log(persWhitPass);

