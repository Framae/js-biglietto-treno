

//quanti km devi percorrere?

let distance = parseInt(prompt("Quanti Km devi percorrere?"));
document.getElementById("distance").innerHTML = distance


//prezzo del biglietto al km

let pricePerKm = parseInt(0.21);


//Quanti hanni hai?

let age = parseInt(prompt("Inserisci la tua età"))
document.getElementById("age").innerHTML = age


let result = 0.21 * distance * age
document.getElementById("result").innerHTML = result


//let priceOfTheTicket = (1 = 0,21)
//let age = parseInt(prompt("Inserisci l'età"))
//if (age < 18) {
 //   result = ((1 = 0,21) - 20%)
//}