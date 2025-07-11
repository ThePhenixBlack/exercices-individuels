const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}
const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}

let array = []
function getLatinCharacterList(text,array){
    
    for(let i=0 ; i < text.length ; i++)
    {
        
       array.push(text.charAt(i))


        
    }
   return array
   
}

function translateLatinCgaracter(caractere)
{
    
        return latinToMorse[caractere]
    
}

function encode(text1)
{
 let x = getLatinCharacterList(text1,array)
 let array2 = []
 for(let i=0 ; i<text1.length ; i++)
 {
	array2.push(translateLatinCgaracter(x[i]))
 }
 return array2
 
 
}
//console.log(encode('BONJOUR'))


function translateMorseCharacter(caractere)
{
    
        return morseToLatin[caractere]
    
}
//translateLatinCgaracter('A')
console.log(translateMorseCharacter('-'))


function decode(text)
{
let x = getLatinCharacterList(text,array)

 for(let i=0 ; i<text.length ; i++)
 {
	array.push(translateMorseCharacter(x[i].split("")))
 }
 return array
 
 
}
console.log(decode('−··· −−− −· ·−−− −−− ··− ·−· '))