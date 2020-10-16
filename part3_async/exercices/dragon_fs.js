const {
    rejects
} = require('assert');
const fs = require('fs');



const JsonDragon = (url, encoding) => (new Promise((resolve, rejects) => {
    
    setTimeout(() => {

        fs.readFile(url, encoding, (err, data) => {
            // impossible de lire le fichier
            if (err) {
                rejects(new Error("File read failed:", err));
                return;
            }
            const {
                dragons
            } = JSON.parse(data);
            resolve(dragons);
            // success
            // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
        })
    }), 500;
}));
JsonDragon('./data/dragons.json', {
    encoding: 'utf8'
})
.then(dragon => dragon)
.then(dragon => {
    const ages = dragon.map(dr => dr.age);
    const maxAge = Math.max(...ages);
    const dragon = dragons.filter(dragons => dragons.age == maxAge)
    console.log(dragon);
})
