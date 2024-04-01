let numeroSecreto = 0; //variable global
let intentos = 0; //condiciones iniciales da el valor correcto

console.log(numeroSecreto); //dice num secreto en la consola desde el principio
function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
      elementoHtml.innerHTML = texto; 
      return;   //no son necesarios no hay retorno
}
//Deckara la function
function verificarIntento() {  //parseInt convierte string a number
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //caja input de texto Html
    
    console.log(numeroSecreto);
    console.log(typeof (numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(typeof (numeroDeUsuario));
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) { //Alt+96
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
       //boton reiniciar camia de color
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario No Acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es Mayor');
        }
        intentos++;
        limpiarCaja(); //llamar function
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
   // valorCaja.value = '';
}
function generarNumeroSecreto() { //variable de bloque let numero secreto
    return Math.floor (Math.random()*10)+1;
   
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero Secreto!!');
    asignarTextoElemento('p', 'Digita un numero de 1 a 10 !!');
    numeroSecreto = generarNumeroSecreto()
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero Aleatorio
    //inicializar intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();


/*
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1, nota2, nota3, nota4){
        let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
        return promedio;
}

function verificarAprobacion(promedio){
         return promedio >= 5 ? "Aprobado" : "Reprobado";
}
*/ 