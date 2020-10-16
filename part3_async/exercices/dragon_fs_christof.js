const fs = require('fs');

// fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
//     // impossible de lire le fichier
//     if (err) {
//         console.log("File read failed:", err);
//         return;
//     }
//     console.log(data);
//     // success
//     // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
//     console.log('File data:', JSON.parse(data));

//     const { dragons } = JSON.parse(data);

//     console.log(dragons);
// });

const jsonDragon = (url, encoding) => (new Promise((resolve, reject) => {
    //function setTimeout delai pour simuler , pour etre asynchrone(juste ppour exemple le setTimeout)
    setTimeout(() => {
        //le mode js qui li le fichier
        fs.readFile(url, encoding, (err, data) => {
                // impossible de lire le fichier
            if (err) {
                reject(new Error("File read failed:", err));
                return;
            }
            //on recupere les elements du dragon que l'on mets dans la variable (cles, varable)
            const { dragons } = JSON.parse(data);
            resolve(dragons);
            // success
            // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
        });
    }, 500);
}));

jsonDragon('./data/dragons.json', { encoding: 'utf8' } )
    .then(dragons => dragons)
    .then(dragons => { 

        const ages = dragons.map(dr => dr.age);
        const ageDragonMax = Math.max(...ages);

        const dragon = dragons.filter(dragon => dragon.age == ageDragonMax )
        console.log(dragon);
    })