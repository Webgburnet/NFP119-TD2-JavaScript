//Exercice 6
//Question 1
var element = document.getElementById("timoleon");
var proprietes = window.getComputedStyle(element);
proprietes.width ;        /* la valeur de la largeur de l'élément dont l'id est 'timoleon'*/
element.style.width;

//question 2
var element = document.getElementById("timoleon");
element.style.width = "50%";
var proprietes = window.getComputedStyle(element);
proprietes.width ;        
element.style.width;

var element = document.getElementById("timoleon");
element.style.margin = "10px";
var proprietes = window.getComputedStyle(element);
proprietes.margin ;      
proprietes.marginLeft ;

//question 3
var element = document.getElementById("timoleon");
element.style.fontSize = "200%";

var element1 = document.getElementById("gr34");
element1.style.fontSize = "200%";

var element2 = document.getElementById("milieu");
element2.style.fontSize = "200%";
