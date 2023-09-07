// Exercice 1

var Nombre=window.prompt("Ecrire le nombre : ");
if(Nombre%2==0)
  {
    console.log("Le nombre est pair"); 
    window.alert("Le nombre est pair");
  }
else 
{
    console.log("Le nombre est impair"); 
    window.alert("Le nombre est impair");
} 

// Exercice 2  

var age=window.prompt("Ecrire votre anée de naissance: ");
a=2023-age;
window.alert("Vous avez " +a+" ans");

if(age>=18)
  {
    console.log("Vous etes majeur"); 
    window.alert("Vous etes majeur");
  }
else 
{
    console.log("Vous etes mineur"); 
    window.alert("Vous etes mineur");
} 

// Exercice 3

var n=window.prompt("Ecrire le nombre 1 : "); 
var nn=window.prompt("Ecrire le nombre 2 : "); 
var o=window.prompt("Indiquez l'opération mathématique : ");  

    switch(o) 
    {
      case "+":
       r=n+nn;
       console.log("Le résultat est "); 
       window.alert("Le résultat est : "+ r);
       break; 

       case "-": 
       r=n-nn;
       console.log("Le résultat est "); 
       window.alert("Le résultat est : "+ r);
       break;  

       case "*":
       r=n*nn;
       console.log("Le résultat est "); 
       window.alert("Le résultat est : "+ r);
       break;  

       case "/":
       r=n/nn;
       console.log("Le résultat est "); 
       window.alert("Le résultat est : "+ r);
       break; 

       default: 
       console.log("Erreur ! Choisissez une autre opération mathématique"); 
       window.alert("Erreur ! Choisissez une autre opération mathématique");
    }