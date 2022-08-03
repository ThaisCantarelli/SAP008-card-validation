import validator from './validator.js';

const form = document.querySelector('.form');
const input = document.querySelector('.cardNumber');
const div = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value;
  const isValid = validator.isValid(value);
  const ocultNumber = validator.maskify(value);
   if (value == ""){
   div.innerHTML= "Digite um valor"
                   
  }if (isValid ){
    div.innerHTML= ocultNumber + " Cartão Válido"
    input.value = ocultNumber

  }else {
    div.innerHTML= "Cartão Inválido"
  }
  
});


