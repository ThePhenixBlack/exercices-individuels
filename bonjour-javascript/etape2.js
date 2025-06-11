
function sayHello(firstname,hour){
    if(hour < 18 ){
let message = `Bonjour ${firstname} !`
return message
    }
message = `Bonsoir ${firstname} !`
return message
}
//console.log(sayHello("Beyonce",13))
document.querySelector(`h1`).innerText = message;