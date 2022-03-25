//Exercice 2 :
//Question 1 + 2:
var changePano = function(){
  var pano = document.getElementById("panoramique");
  pano.src = "images/panoramique2.jpg";
  return 0;
}
changePano();

//Question 3 :
// on récupère l'élément d'id "panoramique"
var pano = document.getElementById("panoramique");
// on crée l'abonnement sur cet élément de la fonction "changePano" pour l'événement "mouseover"
pano.addEventListener("mouseover",changePano);

//Question 4
var changePano2 = function(){
  var pano = document.getElementById("panoramique");
  pano.src = "images/panoramique.jpg";
  return 0;
}
pano.addEventListener("mouseout",changePano2);