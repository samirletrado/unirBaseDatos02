// JavaScript source code
function esPalindromo() {
    var palabra = document.getElementById('textPalindromo').value; 
    var inverso = palabra.split('').reverse().join('');
    
    if (palabra == inverso)    
    window.alert("es palindromo");
    else
    window.alert(" no es palindromo");
        
}


function esMayor() {
    var numero01;
    var numero02;

    numero01 = parseInt(document.getElementById('numero1').value);
    numero02 = parseInt(document.getElementById('numero2').value);
    
    if (numero01 >= numero02) {
        //imprime numero mayor
        window.alert("El numero mayor es: " + numero01 + " ( Numero 1 )");
    }
    else {
        //imprime numero mayor
        window.alert("El Numero mayor es : " + numero02 + " ( Numero 2 )");
    }
}


function cuentaVocales()
{
    var texto = document.getElementById("contarVocales").value;
    var tamtexto = texto.length;
    var vocales = "aeiou";
    var contador = 0;

    for (i = 0; i < tamtexto; i++) {
        // estabas comparando tamtexto en lugar de texto
        // indexOf devuelve -1 si no se encuentra
        if (vocales.indexOf(texto[i]) > -1) {
            contador++;
        }
    }

    // mover el error de no hay vocales al final
    if (contador > 0) {
        window.alert("El Numero de vocales en la frase es " + contador);
    } else {
        window.alert("la frase no tiene vocales");
    }
}

function esVocal() {
    var texto = document.getElementById("buscarVocales").value;
    var vocalA = 0, vocalE = 0, vocalI = 0, vocalO = 0, vocalU = 0 ;

    for (const letra of texto) {
        if (letra == "a" || letra == "A") 
            vocalA++;
        if (letra == "e" || letra == "E")
            vocalE++;
        if (letra == "i" || letra == "I")
            vocalI++;
        if (letra == "o" || letra == "O")
            vocalO++;
        if (letra == "u" || letra == "U")
            vocalU++;
    }
    window.alert("la vocal a esta " + vocalA + " veces en la frase");
    window.alert("la vocal e esta " + vocalE + " veces en la frase");
    window.alert("la vocal i esta " + vocalI + " veces en la frase");
    window.alert("la vocal o esta " + vocalO + " veces en la frase");
    window.alert("la vocal u esta " + vocalU + " veces en la frase");
}
