//Exercice 1 :
//Question 1 :
var pano = document.getElementById("panoramique");
pano;
console.log(" Il sagit de la ligne 36 dans le fichier HTLM qui correspond a la balise img avec l'id=panoramique");
//Question 2 : 
//1.
pano.src;
console.log("pano.src donne tous le chemin vers l'image");
//2.
pano.src = "images/panoramique2.jpg";
console.log("pano.src = 'images/panoramique2.jpg' changement de l'image");
pano.src
//3. <img src="images/mer2.jpg" id="lamer" class="droite"/>
console.log("ID=lamer");
var lamer = document.getElementById("lamer");
lamer.alt;
//Question 3
//1.
console.log("Ligne 18 du fichier HTML");
//2.
var intro = document.getElementById("intro");
intro.textContent;
console.log("intro.textContent montre le texte en brute contenu dans intro, il n'est ni enrichi par un quelconque moyen");
//3.
intro.textContent = "Une rapide présentation de la côte d'ajoncs.";
intro.textContent = "Une rapide présentation de la <strong>côte d'ajoncs</strong>.";
console.log("Il affiche l'ensemble du texte meme les balises");
//4.

//Question 4
intro.style.color = "blue";
intro.style.fontSize = "18px";

//Question 5
var changeWidth = function(img,largeur){
	var chemin = document.getElementById(img);
	chemin.style.width = largeur;
}
changeWidth("panoramique",'400px');