
const inputKmEl = document.querySelector('.input-km')
console.log(inputKmEl);
const inputAgeEl = document.querySelector('.input-age')
const btnEl = document.querySelector('button')
const textEl = document.querySelector('p')
console.log(inputAgeEl);

 const standardPrice = questionKm * 0.21;
 const discount20 = standardPrice * 0.20;
 const discount40 = standardPrice * 0.40;

btnEl = addEventListener('submit', function(e){

    if (inputAgeEl < 18){
         standardPrice -= standardPrice * discount20; 
         textEl.innerText  =`Il costo del tuo biglietto è € ${discount20.toFixed(2)} - hai diritto ad un 20% di sconto` ;
        } 
    
})





// const questionKm = Number (prompt('Quanti chilometri ha bisogno di percorerre?'))
// console.log(questionKm);

// const questionAge = Number (prompt ('Scrivere la propria età in numeri [ es 30]'))
// console.log(questionAge);

// const standardPrice = questionKm * 0.21;
// const discount20 = standardPrice * 0.20;
// const discount40 = standardPrice * 0.40;


// if (questionAge < 18){
//     standardPrice -= standardPrice * discount20; 
//     // alert (`Il costo del tuo biglietto è € ${discount20.toFixed(2)} - hai diritto ad un 20% di sconto` );
// } 
// else if (questionAge > 65) {
//     standardPrice -= standardPrice * discount40; 
//     // alert  (`Il costo del tuo biglietto è € ${discount40.toFixed(2)} - hai diritto ad un 40% di sconto`);
// } 
// else {
//     // alert (`Il costo del tuo biglietto è € ${standardPrice.toFixed(2)}`);
// }

