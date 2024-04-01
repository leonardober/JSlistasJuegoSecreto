let numeroSecreto = generarNumeroSecreto(); //variable global

console.log(numeroSecreto); //dice num secreto en la consola
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
    console.log(numeroDeUsuario === numeroSecreto); //compara los dos numeros
    return;
}
function generarNumeroSecreto() { //variable de bloque let numero secreto
    return Math.floor (Math.random()*10)+1;
   
}

asignarTextoElemento('h1', 'Juego del numero Secreto!!');
asignarTextoElemento('p', 'Digita un numero de 1 a 10 !!');

