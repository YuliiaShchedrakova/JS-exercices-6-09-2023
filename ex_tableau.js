var myT=[]; 
t=window.prompt("Ecrire le taille de tableau:"); 
// t=myT.length;
console.log(t);
for (var i=1; i<=t; i++) 
{
  var b=window.prompt("Ecrire l'élément :");
  myT[i]=b;
  console.log(b);
}

for (var i=0; i<=myT.length; i++)
{
  console.log(myT[i]);
}

console.log("Fin de la boucle")


