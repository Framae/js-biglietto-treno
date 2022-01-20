

let distance = parseInt(prompt("Quanti Km devi percorrere?"));



//prezzo del biglietto al km

let pricePerKm = parseInt(0.21);


//Quanti hanni hai?

let age = parseInt(prompt("Inserisci la tua età"));

//age-based discount

// if (age < 18) {

// }


let result = 0.21 * distance
document.getElementById("result").innerHTML = result;

if (age < 18){
 pricePerKm (0.21 * 0.2 * distance));
} 

// if else (age > 65){
//     pricePerKm = (0.21 * 0.6)
// }

