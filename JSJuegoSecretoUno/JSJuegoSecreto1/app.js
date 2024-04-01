alert("Bienvenido Leonardo JS");

let numeroSecreto = 6;
let numeroUsuario = prompt("Deme un numero entre 1 y 10:");

console.log(numeroUsuario);
//alt+96 ` `
if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    alert('numero equivocado');
    if (numeroUsuario > numeroSecreto) {
        alert('El numero Secreto es menor');
    } else {
        alert('El numero Secreto es mayor');
    }
}