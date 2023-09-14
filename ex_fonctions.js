// // Exercice 1

var x=window.prompt("Ecrire le nombre 1 : "); 
var y=window.prompt("Ecrire le nombre 2 : "); 
console.log(x);
console.log(y);


var imgsrc="img/papillon.jpg";

y.innerHTML;  

    var c=x*x*x; 
    console.log(c);

    var p=x*y; 
    console.log(p);


// var imagejavascript="img/papillon.jpg";

document.getElementById("myP").innerHTML = "Le cube de " +x+ " est égal à " + c;
document.getElementById("myP2").innerHTML ="Le produit de " + x+ " et " +y +" est égal à " + p;

function afficheImg(imgsrc)
{
    var imagejavascript=document.getElementById("myI"); 
    imagejavascript.setAttribute("src",imgsrc);
}
afficheImg(imgsrc);

console.log("Fin de la boucle");

// // Exercice 2

var str1="yuliia; schedrakova; ukraininne; perdue; en; piccardie"; 
console.log(typeof str1);
var str2=";";
var n=2;


function strtok(c1, c2, i)
{
    var resultat=c1.split(c2);
    return resultat[i];
}

window.alert(strtok(str1, str2, n));

console.log("Fin de la boucle");





