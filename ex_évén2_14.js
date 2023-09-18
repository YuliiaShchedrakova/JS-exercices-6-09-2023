
var nomMagique = Math.floor(Math.random() * 100) + 1;

function verif() {
    var s = document.getElementById("textBox1").value;
    var label1 = document.getElementById("label1");

    if (s === "") {
        label1.textContent = "Entrez quelque chose";
    } else {
        var nombre1 = parseInt(s);

        if (isNaN(nombre1)) {
            label1.textContent ="Écrivez un nombre valide";
        } else {
            if (nombre1 === nomMagique) {
                label1.textContent = "Bravo!";
            } else if (nombre1 < nomMagique) {
                label1.textContent = "Trop petit!";
            } else {
                label1.textContent = "Trop grand!";
            }
        }
    }
}
 
