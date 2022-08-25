// guardamos en la variable estilo la direccion a head
let estilo=document.querySelector('header')

function ColorCode() {
  
  //variables para jugar con los codigos y mezclar
  var Aleatorio = '0123456789ABCDEF';
  var CodigoColor = '#';
  
  for (var counter = 0; counter < 6; counter++) {
    CodigoColor =CodigoColor + Aleatorio[Math.floor(Math.random() * 16)];
  }//Generacion del codigo hexagecimal

  estilo.style.background = CodigoColor;//Cambio del color de fondo
  document.getElementById("TextoC").innerHTML = "El color de fondo es: "+CodigoColor;
}