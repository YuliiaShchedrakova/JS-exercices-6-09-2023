var i=0; 
var tab=[];  

do 
{
var p=window.prompt("Ecrire le nombre " +(i+1)); 
console.log(p);
tab[i]=p;
i++;

}
while (p!=0);  

console.log("Nombre : " +(i-1)); 

var sum=0; 
for (var i=0; i<tab.length; i++) 
{
    sum+=parseFloat(tab[i]); 
    
}

var m=sum/(tab.length-1);

document.write("sum=" +sum+"<br>"); 
document.write("moyenne=" +m+"<br>"); 




console.log("Fin de la boucle"); 