const myName = prompt("Qual è il tuo nome?");

const mySurname = prompt("Qual è il tuo cognome?");

const myFavoriteColor = prompt("Qual è il tuo colore preferito?");

let myNumber = 154;


console.log(
    ` Il nome è: ${myName}`
);

console.log(
    ` Il cognome è: ${mySurname}`
);

console.log(
    ` Il colore preferito è: ${myFavoriteColor}`
);


document.getElementById('myPass').innerHTML = `${myName}${mySurname}${myFavoriteColor}${myNumber}`; 