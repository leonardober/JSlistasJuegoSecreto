alert("Bienvenido 4@ Version SeudoAleatoria JS");
//Version Math.Random()
//atajo consola F12
//tres puntos/mas heramientas/heramientaas de desarrollo/consola
let numeroMaximo = 100;
//let numeroSecreto = Math.floor(Math.random() * 10) + 1;;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let oportunidad = 'vez';
let maximosIntentos = 3;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
 numeroUsuario = parseInt(prompt(`Deme un numero entre 1 y ${numeroMaximo} por favor:`) );

console.log(typeof(numeroUsuario));
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