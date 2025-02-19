// - Form inputs 

const formEl = document.querySelector('form')
const inputKmEl = document.querySelector('.input-km')
const inputAgeEl = document.querySelector('.input-age')
const btnEl = document.querySelector('button')
const textEl = document.querySelector('p')
const passangerName = document.querySelector('.input-name');
console.log(passangerName);

// - 
let passNameEl = document.getElementById('name')
let discountEl = document.getElementById('discount')
let codeEl = document.getElementById('code')
let priceEl = document.getElementById('price')


 formEl.addEventListener('submit', function(e){
    console.log(btnEl);
    e.preventDefault();
    
    let standardPrice = inputKmEl.value * 0.21;
    let discount20 = standardPrice * 0.20;
    let discount40 = standardPrice * 0.40;

    let chariotEl = document.getElementById('chariot-number');

    chariotEl.innerHTML = Math.floor(Math.random() * 10);

    passNameEl.innerHTML = passangerName.value;

    if (inputAgeEl.value < 18){
         standardPrice -= standardPrice * discount20; 
         textEl.innerText  = `Il costo del tuo biglietto è € ${discount20.toFixed(2)} - hai diritto ad un 20% di sconto` ;
         discountEl.innerHTML = '20% di sconto'
         priceEl.innerHTML = `€ ${discount20.toFixed(2)}`
         
        } 
    else if (inputAgeEl.value > 65) {
               standardPrice -= standardPrice * discount40; 
         textEl.innerText  = `Il costo del tuo biglietto è € ${discount40.toFixed(2)} - hai diritto ad un 40% di sconto` ;
            
            } 
        else {
           textEl.innerText =  `Il costo del tuo biglietto è € ${standardPrice.toFixed(2)}`
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

