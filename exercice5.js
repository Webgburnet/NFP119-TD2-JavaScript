var poke = document.getElementById("poke");
var compteur =0;

poke.addEventListener("click", compte);

function compte(){
	// compteur = compteur + 1;
	if (compteur <5){
		compteur = compteur + 1;
	}
	else{
		poke.removeEventListener("click", compte);
		console.log("else");
	}
	console.log(compteur);
	return compteur;
};