// // // Exercice 1 
var i=0;

do 
{
var p=window.prompt("Ecrire le prenom " +(i+1)); 
console.log(p);
i++;
}
while (p!=0); 

console.log("Nombre de prenoms : " +(i-1)); 

console.log("Fin de la boucle"); 

// // Exercise 2

var N=parseInt(window.prompt("Ecrire le N: ")); 

// alert(typeof(N));

for (N; N>0; N--)
{
document.write(N);
console.log(N);
}

console.log("fin de boucle"); 


// // // Exercise 3

do
 {
  var a=window.prompt("Ecrire le nombre 1 : "); 
  var b=window.prompt("Ecrire le nombre 2 : "); 
  console.log(a);
  console.log(b);
  c=+a+ +b; 
  d=c/2;
window.alert("Somme : " + c);
window.alert("Moyenne : " +d);
  }
  while (a!=0); 



// console.log("fin de la boucle"); 

// // // // Exercise 4

var N=window.prompt("Ecrire N : "); 
var X=window.prompt("Ecrire X : "); 
var i=1; 

do
{
resultat=X*i;
window.alert("Resultat : " + resultat);
i++;
} 
while (i<=N);
console.log("fin de boucle"); 



// // // Exercise 5

var v=window.prompt("Ecrire un mot : "); 

// alert(v);

// alert(v.substring(0)); 

var c=0;
var l=v.toLowerCase();

l.substring(0);

for (var i=0; i<v.length; i++) 
{
  var lettre = l.substring(i,i+1);
  // alert(l.substring(i,i+1));


  if ((lettre==="a")||(lettre==="e")||(lettre==="y")||(lettre==="u")||(lettre==="i")||(lettre==="o"))
  {
  c++;
  }
};

window.alert("Le nombre de voyelles : " + c); 

