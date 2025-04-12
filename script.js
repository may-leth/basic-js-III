//NUMEROS
// funcion dos argumentos y sume
function suma(num1, num2) {
    return num1 + num2;
};

console.log(suma(0, 1));

//funcion dos argumentos y reste
function resta(num1, num2) {
    return num1 - num2;
};

console.log(resta(10, 8));

//funcion dos argumentos y devuelva producto
function multiplicacion(num1, num2) {
    return num1 * num2;
}; 

console.log(multiplicacion(3, 1));

//funcion dos argumentos y divida
function division(num1, num2) {
    return num1 / num2;
};

console.log(division(8, 2));

//funcion numero base y numero exponente, potencia
function potencia(numBase, numExp) {
    return Math.pow(numBase, numExp);
};

console.log(potencia(5, 1));

//funcion dos argumentos y devuelva el resto de division
function residuo(num1, num2) {
    return num1 % num2;
};

console.log(residuo(14, 8));

//funcion un argumento y raiz cuadrada
function raizCuadrada(num1) {
    return Math.sqrt(num1);
};

console.log(raizCuadrada(49));

//funcion un argumento y valor absoluto
function valorAbsoluto(num1) {
    return Math.abs(num1);
};

console.log(valorAbsoluto(8));

//funcion numero decimal y numero redondeado mas cercano
function redondear(numDec) {
    return Math.round(numDec);
}; 

console.log(redondear(8.6));

//funcion genere y devuelva un numero aleatorio entre 0 y 1
function numAleatorio() {
    return Math.random();
};

console.log(numAleatorio());


//LETRAS
//funcion dos cadenas y concatenen
function cadenaConcatenadas(cadena1, cadena2) {
    return cadena1 + cadena2;
};

console.log(cadenaConcatenadas("primer ", "ejercicio"));

//funcion una cadena y devuelva longitud
function longitudDeCadena(cadena) {
    return cadena.length;
};

console.log(longitudDeCadena("Segundoejercicio"));

//funcion una cadena y devuelva mayusculas 
function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
};

console.log(convertirAMayusculas("Tercer Ejercicio"));

//funcion una cadena y devuelva minisculas
function convertirAMinusculas(cadena) {
    return cadena.toLowerCase();
};

console.log(convertirAMinusculas("CUARTO EJERCICIO"));

//funcion una cadena e indice y devuelva el carácter en esa posición
function obtenerCaracter(cadena, indice) {
    return cadena.charAt(indice);
};

console.log(obtenerCaracter("quinto ejercicio", 2));

//funcion una cadena y devuelva esta invertida
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
};

console.log(invertirCadena("sexto ejercicio"));

//funcion una cadena y carácter y devuelva la cantidad de veces que aparece el carácter
function contadorDeCaracteres(cadena, caracter) {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracter) {
            contador++;
        }
    }

    return contador;
};

console.log(contadorDeCaracteres("septimo ejercicio", "e"));

//funcion una cadena y devuelva la cadena sin espacios
function sinEspacios(cadena) {
    return cadena.replace(/\s+/g, "");
};

console.log(sinEspacios("o c t a v o ejercicio"));

//funcion una cadena y devuelve true o false dependiendo si es palindromo
function esPalindromo(cadena) {
    cadena = cadena.replace(/\s+/g, "").toLowerCase();
    return cadena == cadena.split("").reverse().join("");
};

console.log(esPalindromo("anita lava la tina"));
console.log(esPalindromo("Noveno Ejercicio"));

//funcion una cadena y devuelva la cadena con mayusculas inicial
function empezarPorMayuscula(cadena) {
    return cadena.replace(/\b\w/g, l => l.toUpperCase());
};

console.log(empezarPorMayuscula("decimo y ultimo ejercicio de letras"));

//ARRAYS
//funcion array de numero y devuelva suma de todos los elementos
function sumaDeArray(array) {
    let suma = 0;
    for (let i = 0;i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

console.log(sumaDeArray([1, 2, 3, 4, 10]));

// funcion un array de numeros y devuelva el promedio de sus elementos