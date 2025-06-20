function player1(){
    let guessNumber = prompt("Choisissez un nombre à deviner entre 0 et 50")
    return Number(guessNumber)
}





function guessAnumber() {
    let givenNumber = prompt("Saisissez un nombre")

    return Number(givenNumber)
}
//console.log(guessAnumber())


function didWin(number,targetNumber){
  
if(number === targetNumber)
{
    return true
}
else if(number < 0 && number <  50)
{
    return('Vous devez choisir un nombre entre 0 et 50')
}
{
    return false
}
}

// ✅ Fonction principale qui gère tout le jeu
function gamePlay() {
    let numberToGuess = player1()
    let hasWon = false;

    while (!hasWon) {
        let userGuess = guessAnumber();        // 🔹 Appel de guessAnumber
        hasWon = didWin(userGuess,numberToGuess);            // 🔹 Transmission à didWin

        if (hasWon) {
            alert("Bravo, tu as gagné !");
        } else {
            alert("Réessaie va !");
        }
    }
}
gamePlay() 