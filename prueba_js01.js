//Solicita al usuario que elija entre la opción 1 o 2

var option = prompt("Pulsa 1 o 2 para realizar un ejercicio u otro.");

if (option == 1) {

    //Se le debe pedir dos números al usuario

    var n1user = parseFloat(prompt("escribe un número sin fliparte"));
    var n2user = parseFloat(prompt("escribimos otro número"));

    //indicar si son impares y múltiplos de 25 ambos, uno de ellos o ninguno

    if ((n1user % 2 == 0) && (n1user % 25 == 0) && (n2user % 2 == 0) && (n2user % 25 == 0)) {
        alert(+n1user + " y " + n2user + " son pares y multiplos de 25.");
        } else if ((n1user % 2 == 1) && (n1user % 25 == 0) && (n2user % 2 == 0) && (n2user % 25 == 0)) {
        alert(+n1user + " es impar y " + n2user + " es par. Ambos son multiplos de 25.");
        } else if ((n1user % 2 == 1) && (n1user % 25 == 0) && (n2user % 2 == 1) && (n2user % 25 == 0)) {
        alert(+n1user + " y " + n2user + " son impares. Ambos son multiplos de 25.");
        } else if ((n1user % 2 == 1) && (n1user % 25 != 0) && (n2user % 2 == 1) && (n2user % 25 == 0)) {
        alert(+n1user + " y " + n2user + " son impares. " + n1user + " no es multiplos de 25; aunque " + n2user + " si lo es.");  
        } else {
            ((n1user % 2 == 1) && (n1user % 25 != 0) && (n2user % 2 == 1) && (n2user % 25 != 0))
            alert(+n1user + " y " + n2user + " son impares y ninguno es multiplos de 25.");
        }

}

//seguiríamos con if (option == 2) ...

