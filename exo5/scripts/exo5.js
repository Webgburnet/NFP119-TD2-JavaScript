// script exo5.js pour exercice "Boutons et click"

var plus = document.getElementById("plus");
var moins = document.getElementById("moins");
var sun = document.getElementById("sun");

var largeur = 0;
var compteur = 0;
var char_largeur="";
var current_width=sun.clientWidth;

plus.addEventListener("click", agrandir);

function agrandir(){
	// compteur = compteur + 1;
	if (largeur <=500){
		largeur = largeur + 20;
		char_largeur=sun.clientWidth + 20 +"px";
		sun.style.width=char_largeur;
	}
	else{
		// plus.removeEventListener("click", agrandir);
	}
	console.log(largeur);
	console.log(char_largeur);
};

//Question 3
moins.addEventListener("click", retraicir);
function retraicir(){
	compteur = compteur + 1;
	if (largeur >=-250){
		largeur = largeur - 20;
		char_largeur=sun.clientWidth - 20*compteur + "px";
		sun.style.width=char_largeur;
	}
	else{
		// plus.removeEventListener("click", retraicir);
	}
	console.log(largeur);
	console.log(char_largeur);
};

//Question 4 + 5
var current_img=0;
sun.addEventListener("click", remplace);
function remplace(){
	if(current_img==0){
		current_img=1;
		sun.src = "../images/eclipse.jpg";
	}
	else{
		current_img=0;
		sun.src = "../images/soleil.jpg";
	}
};



// var changeWidth = function(img,largeur){
	// var chemin = document.getElementById(img);
	// chemin.style.width = largeur;
// }
// changeWidth("panoramique",'400px');