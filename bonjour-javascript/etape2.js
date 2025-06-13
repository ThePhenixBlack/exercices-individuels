
function sayHello(firstname,hour){
    if(hour < 18 ){
let message = `Bonjour ${firstname} !`
document.querySelector(`h1`).innerText = message;
return message
    }
message = `Bonsoir ${firstname} !`
document.querySelector(`h1`).innerText = message;
return message
}
//console.log(sayHello("Beyonce",13))
console.log(sayHello(prompt(),29))
