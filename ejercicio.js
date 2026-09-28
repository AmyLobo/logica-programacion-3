
let dato = prompt("Escribe un número:");
let numero = Number(dato);
 
// Si no es un número, mostrar error y volver a pedir
while (isNaN(numero) || dato === "") {
  alert("Error: lo que escribiste no es un número");
  dato = prompt("Escribe un número:");
  numero = Number(dato);
}
 
// Calcular el factorial
let factorial = 1;
 
for (let i = 1; i <= numero; i++) {
  factorial = factorial * i;
}
 
// Mostrar el resultado por consola
let mensaje = "El factorial de " + numero + " es " + factorial;
console.log(mensaje);
 
// Mostrar el resultado en el DOM
let resultado = document.getElementById("resultado");
resultado.innerHTML = mensaje;
 