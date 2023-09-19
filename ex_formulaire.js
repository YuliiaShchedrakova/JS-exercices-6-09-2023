function validateForm() 

{

var societe=document.forms["societe"].value; 
var contact=document.forms["contact"].value; 
var code=document.forms["code"].value;  
var ville=document.forms["ville"].value;  
var email=document.forms["email"].value;  

if (societe.length<1) {
    alert("Entrez le nom de societe s.v.p !"); 
    return false; 
}

if (contact.length<1) {
    alert("Entrez le nom de la personne à contacter s.v.p. !"); 
    return false; 
}

if (code = /^[0-9]*$/) {
    alert("Entrez le nom de societe s.v.p !"); 
    return false; 
}


if (ville.length<1) {
    alert("Entrez le nom de votre ville s.v.p. !"); 
    return false; 
}

if (email ) {
    alert("Entrez le nom de societe s.v.p !"); 
    return false; 
}


}