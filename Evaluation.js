// // Exercice 1
// function Compteur () {
//     var jeune=0;
//     var moyens=0;
//     var vieux=0;

// while (true) {

// var age=window.prompt("Ecrire votre age: ");


// if(age<20)
//   {
//     console.log("Vous etes jeune"); 
//     window.alert("Vous etes jeune");
//     jeune++;
//   }
// else  {
//     if(age>=20 && age<=40)
// {
//     console.log("Vous etes moyens"); 
//     window.alert("Vous etes moyens");
//     moyens++;
// } 
// else if (age>40)
// {
//     console.log("Vous etes vieux"); 
//     window.alert("Vous etes vieux");
//     vieux++;
// }
// }

// if (age!=100) {
// break; 
// }
// }

// console.log("fin de la boucle");  

// }
// Compteur () 



// Exercice 2

// function multiply () {
//     for (var i=0; i<10; i++) {
//         resultat=5*i; 
//         console.log("5*"+i+"="+resultat);
//     }
// } 
// multiply(); 



// Exercise 3 

var tab=["Audrey", "Aurelien", "Flavien", "Jeremy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stephane"];

Function AjouterNom () {
    var nom=document.getElementById("nom").value; 
    let newNom=document.getElementById("nom").value; 
    tab.push(nom);
    document.getElementById("nom").value=""; 
ActualiserTableau();
}

Function SupplimerNom() {
    
}