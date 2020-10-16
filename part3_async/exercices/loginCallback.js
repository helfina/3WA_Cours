const login = (email, password , callBack) => {
    setTimeout(() => {
         callBack(email) ;
    }, 1000);
}
login('alan@alan.fr', 1234567890, (email) =>{
    console.log('execute', email)
});


