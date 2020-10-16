const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
        "s4",
        {
            "name": "Naoudi",
            "mention": "",
            "notes": [14.5, 19, 18],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/3"
        }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
         [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
];

// creation de la map
const DataStudentsMap = new Map(DataStudents);

//calcule de la moyenne
const DECIMAL = 100;

const average = notes => {
    if(notes.length === 0) return null;
    return Math.floor((notes.reduce( (acc, curr) => curr + acc) / notes.length) * DECIMAL) / DECIMAL;
}


const student = DataStudentsMap.get("s1");

const note = student.notes;

for (const [id ,student] of DataStudentsMap) {

    const {notes} = student;
    const avg = average(notes)
    student.average = avg;
    /**
     * Mettez à jour la mention en fonction de la moyenne obtenue, voir la clé *mention dans les données ci-dessous. Pour les différentes moyennes vous *utiliserez le code de mentions suivant :
     *TB pour 17 à 20
     *B pour 14 à 16
     * AB pour 12 à 13
     * P pour 10 à 11
     * Pour les autres cas mettre aucune mention.
     */
    if(avg >= 17  ){student.mention = "TB"; continue;}
    if(avg >=13 && avg <16 ){student.mention = "B"; continue;}
    if(avg > 11 || avg >= 12 && avg <13 ){student.mention = "AB"; continue;}
    if(avg >=10 && avg <11 ){student.mention = "P"; continue;}
    if(avg < 10 ){student.mention = "Mettez vous au travail"; continue;} 

    
}

console.log(DataStudentsMap);

//recupere toutes les keys
// console.log(DataStudentsMap.keys());
//recupere toutes les values
// console.log(DataStudentsMap.values());
