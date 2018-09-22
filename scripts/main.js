/*Fenetre popup*/

var myVar; //Declaration de la variable

setTimeout(confirmation, 10000); // timer
function confirmation (){ // fonction qui envoi la valeur true ou false dans myVar
  myVar = confirm ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please.");
}
if (myVar) {
    window.location="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } //si myVar = True, le lien est ouvert
