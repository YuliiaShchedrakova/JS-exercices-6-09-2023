// // Exercice 1

var x=window.prompt("Ecrire le nombre 1 : "); 
var y=window.prompt("Ecrire le nombre 2 : "); 
console.log(x);
console.log(y);


y.innerHTML;  

    var c=x*x*x; 
    console.log(c);

    var p=x*y; 
    console.log(p);

console.log("Fin de la boucle");



document.getElementById("myP").innerHTML = "Le cube de " +x+ " est égal à " + c;
document.getElementById("myP2").innerHTML ="Le produit de " + x+ " et " +y +" est égal à " + p;

var imagejavascript="img/papillon.jpg";

function afficheImg(imagejavascript)
{
imagejavascript.setAttribute("src", "img/papillon.jpg");
}
afficheImg("img");



// // Exercice 2

// var str1=window.prompt("Ecrire une liste de mots séparés par le caractère ; :");
// var str2=
// strtok(str1, ";", 2); 
// var str1=str.split (''); 
// console.log(str1 [2]);

// window.alert(strtok);