const add = number =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(number);
        }),500
    });

};
add(1)
.then(number =>add(number +2))
.then(number => add(number + 3))
.then(sum => console.log(sum))
