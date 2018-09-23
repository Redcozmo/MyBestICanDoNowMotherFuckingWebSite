// Fenetre popup

var myVar; //Declaration de la variable

setTimeout(confirmation, 10000); // timer
function confirmation(){ // fonction qui envoie la valeur true ou false dans myVar
  myVar = confirm ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please.");
  if (myVar) {//si myVar = True, le lien est ouvert
  window.location="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}

var compteur = 0;
var couleurs = ['#003CFF', '#FF00BC', '#FFC300', '#00FF43'];

function psyche(){
  compteur += 1;
  if (compteur%2 == 1){
  document.body.className="psychemode";
  document.getElementById("plouf").style.backgroundColor="white"; // changer background bouton
  }
  // bout de code a finaliser
  //else if (compteur > 5) {
  //  alert("Le mode psychédélique t'ennui ? Actives le MotherFuckingPsychedeliqueMode !!");
  //  var j = 0;
  //  alert("test");
  //  for (var i = 1; i < couleurs.length+1; i++) {
  //    setTimeout(function(){document.psychemode.background = couleurs[i];}, 100);
  //    j++;
  //    if (i == 4 && j < 20) {i = 1;}
  //  }
  //}
  else {
    document.body.className="normalmode";
    document.getElementById("plouf").style.backgroundColor="magenta"; // changer background bouton
  }
}
