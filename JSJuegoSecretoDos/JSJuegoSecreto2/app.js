alert("Bienvenido Leo2 JS");

let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let oportunidad = 'vez';
//Juega hasta acertar
while(numeroUsuario != numeroSecreto){
 numeroUsuario = prompt("Deme un numero entre 1 y 10:");

console.log(numeroUsuario);
//alt+96 ` `
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario} lo hiciste en: ${intentos} ${oportunidad}`);
    } else {
        alert('numero equivocado');
        if (numeroUsuario > numeroSecreto) {
            alert('El numero Secreto es menor');
        } else {
            alert('El numero Secreto es mayor');
        }
        intentos = intentos + 1;
        oportunidad = 'veces';
        if (intentos > 3) {
            alert('llegaste a Numero maximo intentos');
            break;
        }
    }
}