// script exo6.js pour exercice "Conversion de températures"

var F = function Celsius_vers_Fahrenheit (C) {
        return C*1.8+32;
};
 
var C = function Fahrenheit_vers_Celsius (F) {
        return (F-32)/1.8;
};

var id_cel = document.getElementById("celsius");
var id_fah = document.getElementById("fahrenheit");

var button_cToF = document.getElementById("cToF");
var button_fToC = document.getElementById("fToC");
 
// id_cel.addEventListener("change", changement_cel);
// id_fah.addEventListener("change", changement_fah);

button_cToF.addEventListener("click", changement_cel);
button_fToC.addEventListener("click", changement_fah);
 
function changement_cel() {
   
 var id_cel = document.getElementById("celsius");
 var id_fah = document.getElementById("fahrenheit");
 var val_celsius = id_cel.value;
 var val_celsius_float = parseFloat(val_celsius);
 if (isNaN(val_celsius_float) == false) {  
   id_fah.value = (F(val_celsius_float)).toFixed(2);  
 }
};

function changement_fah() {
 
 var id_cel = document.getElementById("celsius");
 var id_fah = document.getElementById("fahrenheit");
 var val_fahrenheit = id_fah.value;
 var val_fahrenheit_float = parseFloat(val_fahrenheit);
 if (isNaN(val_fahrenheit_float) == false) {
   id_cel.value = (C(val_fahrenheit_float)).toFixed(2);
 }
};