// script exo6.js pour exercice "Conversion de températures"

var bin_to_dec = function(num){
	return parseInt(num,2).toString(10);
};
var bin_to_hex = function(num){
	return parseInt(num,2).toString(16);
};
var dec_to_bin = function(num){
	return parseInt(num,10).toString(2);
};
var dec_to_hex = function(num){
	return parseInt(num,10).toString(16);
};
var hex_to_bin = function(num){
	return parseInt(num,16).toString(2);
};
var hex_to_dec = function(num){
	return parseInt(num,16).toString(10);
};


var id_bin = document.getElementById("bin");
var id_dec = document.getElementById("dec");
var id_hex = document.getElementById("hex");
 
id_bin .addEventListener("change", changement_b);
id_dec.addEventListener("change", changement_d);
id_hex.addEventListener("change", changement_h);
 
function changement_b() {
 var id_bin = document.getElementById("bin");
 var id_dec = document.getElementById("dec");
 var id_hex = document.getElementById("hex");
 var val_bin = id_bin.value;
 var val_dec = bin_to_dec(val_bin);//parseInt(val_bin,2);
 var val_hex = bin_to_hex(val_bin);//val_dec.toString(16);
 id_dec.value=val_dec;
 id_hex.value=val_hex;
};

function changement_d() {
 
 var id_bin = document.getElementById("bin");
 var id_dec = document.getElementById("dec");
 var id_hex = document.getElementById("hex");
 var val_dec = parseInt(id_dec.value);
 var val_bin = dec_to_bin(val_dec);//val_dec.toString(2);
 var val_hex = dec_to_hex(val_dec);//val_dec.toString(16);
 id_bin.value=val_bin;
 id_hex.value=val_hex;
};

function changement_h() {
 
 var id_bin = document.getElementById("bin");
 var id_dec = document.getElementById("dec");
 var id_hex = document.getElementById("hex");
 var val_hex = id_hex.value;
 var val_dec = hex_to_dec(val_hex);//parseInt(val_hex,16).toString();
 var val_bin = hex_to_bin(val_hex);//val_dec.toString(2);
 id_dec.value=val_dec;
 id_bin.value=val_bin;
};