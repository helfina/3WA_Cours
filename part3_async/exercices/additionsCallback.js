const add = (number, number1, callback) => {
    setTimeout(() => {
        callback(number,number1);
        //
    }, 1000);
}
add(1,2,(a,b) => console.log(a+b));
const Add = (number, callback) =>{
    setTimeout(()=>{callback(number);});
};
Add(1,number => {
    let sum = number;
    Add(2, number => {
        sum += number;
        console.log('sum',sum);
    })    
    console.log('number',number);
})