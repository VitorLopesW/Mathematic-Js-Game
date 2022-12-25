let number = ""
let display = document.getElementById('dP')
let challenge = document.getElementById('cha')
let ww = document.getElementById('wins')
let lf = document.getElementById('life')
let question = 0
let numWin = 0
let numLife = 3

challengeLogic()

function one(){ // funções para os botões numericos 
    number += "1"
update()
console.log("1 clicked")
console.log(number)
    }
    function two(){ 
        number += "2"
    update()
    console.log(number)
     }

    function three(){ 
        number += "3"
    update()
    console.log(number)
     }
     function four(){ 
        number += "4"
    update()
    console.log(number)
     }
     function five(){ 
        number += "5"
    update()
    console.log(number)
     }
     function six(){ 
        number += "6"
    update()
    console.log(number)
     }
     function seven(){ 
        number += "7"
    update()
    console.log(number)
     }
     function eight(){ 
        number += "8"
    update()
    console.log(number)
     }
     function nine(){ 
        number += "9"
    update()
    console.log(number)
     }
     function zero(){ 
        number += "0"
    update()
    console.log(number)
     }
 // fim da funções para os botões numericos 

 function invert(){
    number = eval(number)
    number = (-1 * number)
    update();
    number = "" + number
}

function dell(){ 
    number = number.slice(0, -1);
    update()
}

function update(){ // função para atualizar 
if (numLife == 0) {
    display.innerText = "Game Over"
    
}
else {display.innerText = number}
    }

   function challengeLogic() { // logica para as perguntas 
    let numA = Math.floor(Math.random(1) * 50);
    let numB = Math.floor(Math.random(1) * 50);
    numA += 1
    numB += 1
console.log(1 + numA)
console.log(1 + numB)
var myArray = ['+', '-', '/', '*']; 
const randomElement = myArray[Math.floor(Math.random() * 4)];


    challenge.innerText = numA + " " + randomElement + " "+ numB
question = eval(numA + " " + randomElement + " "+ numB)
console.log(question + " question")
   } // fim logica para as perguntas 

function equal(){ // logica de apertar o "="

if (number == question){
win()
challengeLogic()
}
else {
number = ""
update()
lost()
}

function win(){
numWin += 1
ww.innerText = ("Wins: " + numWin)
number = ""
update()
}
function lost(){
    if (numLife > 0){ numLife -= 1
    lf.innerText = ("♥ : " + numLife)
    number = ""
    update()}
    }
    
// fim da lgocia de apertar 0 "="
} 