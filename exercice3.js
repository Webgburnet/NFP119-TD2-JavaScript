//Excercice 3
var setupListeners = function(){
	var pano = document.getElementById("panoramique");
	pano.addEventListener("mouseover",changePano);
	pano.addEventListener("mouseout",changePano2);
}

window.addEventListener("load",setupListeners);

var changePano = function(){
  var pano = document.getElementById("panoramique");
  pano.src = "images/panoramique2.jpg";
  return 0;
}

var changePano2 = function(){
  var pano = document.getElementById("panoramique");
  pano.src = "images/panoramique.jpg";
  return 0;
}