/** @format */
function suma(a, b) {
  return a + b;
}

console.log("Hola Mundo: " + suma(2, 3));

function initializePage() {
  console.log("****** Onload completed ****");
  console.log(navigator.userAgent);
  console.log(navigator.language);
  console.log(navigator.languages);
  //Tarea, durante la practica -> Implementar la funcionalid de copiado
  //console.log(navigator.ap);
  //Creen un inut text con algun texto predefinido -> un boton "Copiar"-> Copie en el clipboard
  //Pegar el texto en un notepad, en algun elemento visual que permita comprobar que se ha copiado
}
