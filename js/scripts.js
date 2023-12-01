/*

    Chiedi all'utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito114

*/

// 1) Chiedi il nome
const myName = prompt("Qual è il tuo nome?");
console.log('myName', myName, typeof myName);

// 2) Chiedi il cognome
const mySurname = prompt("Qual è il tuo cognome?");
console.log('mySurname', mySurname, typeof mySurname);

// 3) Chiedi il mio colore preferito
const myFavouriteColor = prompt("Qual è il tuo colore preferito?");
console.log('myFavouriteColor', myFavouriteColor, typeof myFavouriteColor);

let myNumber = 154;

// 4) Scrivi sulla pagina nomecognomecolorepreferito154
// Posso scrivere in pagina in 2 modi: 

// a)
document.writeln(myName + mySurname + myFavouriteColor + myNumber);

// b)
const myPassElement = document.getElementById('myPass');
console.log('myPassElement', myPassElement, typeof myPassElement);

// EXTRA
// c) document.querySelector('QUALCOSA')
const myPassWithQuerySelector = document.querySelector('#my-container > p');
console.log('myPassWithQuerySelector', myPassWithQuerySelector, typeof myPassWithQuerySelector);

//Leggo il contenuto HTML del tag
console.log(myPassWithQuerySelector.innerHTML);

// Creo la variabile per il testo + la password
const initialText = 'La tua pwd é: ';
const password = myName + mySurname + myFavouriteColor + myNumber;
const password2 = `${myName}${mySurname}${myFavouriteColor}${myNumber}`;

//Scrivo il contenuto HTML del tag
myPassWithQuerySelector.innerHTML = initialText + password;