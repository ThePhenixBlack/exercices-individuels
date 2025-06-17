function guessAnumber() {
    let givenNumber = prompt("Saisissez un nombre")
    return givenNumber
}
//console.log(guessAnumber())


function didWin(number){
if(number < 22)
{
    alert("Plus grand")
}
else if(number> 22) {
    alert("Plus petit")

} else 
{
    alert("Bravo! Vous avez devinez le nombre !")
}
}
console.log(didWin(guessAnumber()))