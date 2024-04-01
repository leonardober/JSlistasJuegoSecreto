alert("Bienvenido Leo3@ Version JS");

let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
//let oportunidad = 'vez';
let maximosIntentos = 3;
//Juega hasta acertar
while(numeroUsuario != numeroSecreto){
 numeroUsuario = prompt("Deme un numero entre 1 y 10:");

console.log(numeroUsuario);
//alt+96 ` `
    if (numeroUsuario == numeroSecreto) {
        // ? = if   : = else
        alert(`Acertaste, el numero es: ${numeroUsuario} lo hiciste en: ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        alert('numero equivocado');
        if (numeroUsuario > numeroSecreto) {
            alert('El numero Secreto es menor');
        } else {
            alert('El numero Secreto es mayor');
        }
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        if (intentos > maximosIntentos) {
            //alt + 96 ` `
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}