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
function promedioDeArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}; 

console.log(promedioDeArray([10, 20, 30, 40]));

//funcion un array de numeros y lo devuelva ordenado de forma ascendente
function arrayAscendente(numArray) {
    return numArray.sort((a, b)=> a - b);
};

console.log(arrayAscendente([10, 9, 5, 6, 8, 7]));

//funcion array de numeros y un numero que devuelva un nuevo array con los elementos mayores al numero
function ordenNumeroYArray(numArray, num) {
    let nuevoArray = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > num) {
            nuevoArray.push(numArray[i]);
        }
    }
    return nuevoArray;
};

console.log(ordenNumeroYArray([10, 25, 30, 5, 18], 15));

//funcion dos arrays y devuelva uno nuevo con todos los elementos de ambos
function fusionDeArrays(array1, array2) {
    return array1.concat(array2);
};

console.log(fusionDeArrays(["este es", "el ejercicio", "numero 5"], [1, 2, 3, 4, 5]));

//funcion un array de numeros y devuelva el numero maximo dentro del array
function encontrarNumMax(arrayNum) {
    let numeroMax = arrayNum[0];
    for (let i = 1; i < arrayNum.length; i++) {
        if (arrayNum[i] > numeroMax) {
            numeroMax = arrayNum[i];
        }
    }
    return numeroMax;
};

console.log(encontrarNumMax([10, 25, -5, 40, 18]));

//funcion array de numero y devuelva el numero minimo dentro del array
function encontrarNumMin(arrayNum) {
    let i = 0;
    let numeroMin = 0;
    while (i < arrayNum.length) {
        if (arrayNum[i] < numeroMin) {
            numeroMin = arrayNum[i];
        }
        i++;
    }
    return numeroMin;
};

console.log(encontrarNumMin([10, 25, -5, 40, 18]));

//funcion array y un elemento y devuelva cantidad de veces que el elemento aparece en el array
function repeticionDeElementoArray(arrayNum, num) {
    let contador = 0;
    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] == num) {
            contador++;
        }
    }
    return contador;
};

console.log(repeticionDeElementoArray([2, 4, 5, 8, 6, 8, -9, 8], 8));

//funcion array y devuelva un nuevo array sin elemento duplicados
function arraySinRepeticion(arrayNum) {
    let nuevoArray = [];
    for (let i = 0; i < arrayNum.length; i++){
        if (!nuevoArray.includes(arrayNum[i])) {
            nuevoArray.push(arrayNum[i]);
        }
    }
    return nuevoArray;
};

console.log(arraySinRepeticion([1, 2, 2, 3, 4, 5, 5, 2]));

//funcion array con los elementos en orden inverso
function arrayInvertido(arrayNum) {
    let arrayInverso = [];
    for (let i = arrayNum.length - 1; i >=0; i--) {
        arrayInverso.push(arrayNum[i]);
    }
    return arrayInverso;
};

console.log(arrayInvertido([1, 2, 3, 4, 5]));

//OBJETOS LITERALES
//funcion objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad
const persona ={
    nombre: "Mayleth",
    edad: 28};

function ObtenerNombre(objeto) {
    return objeto.nombre;
};

console.log(ObtenerNombre(persona));

//funcion objeto literal con una propiedad 'edad' y numero como argumentos y actualice edad 
function actualizarEdad(objeto, nuevaEdad) {
    objeto.edad = nuevaEdad;
    return objeto;
}; 

console.log(actualizarEdad(persona, 30));

//funcion objeto literal y cadena de texto coomo argumento y agregue una nueva propiedad con la cadena de texto
// y un valor incial de null
function agregarPropiedad(objeto, nuevaPropiedad) {
    objeto[nuevaPropiedad] = null;
    return objeto;
};

console.log(agregarPropiedad(persona, "ocupación"));

//funcion objeto literal y cadena de texto y elimine la propiedad del objeto dado 
function eliminarPropiedad(objeto, eliminarProp) {
    delete objeto[eliminarProp];
    return objeto;
};

console.log(eliminarPropiedad(persona, "ocupación"));

//funcion objeto literal y devuelva cantidad de propiedades
function numeroDeProp(objeto) {
    const propiedades = Object.keys(objeto);
    return propiedades.length;
};

console.log(numeroDeProp(persona));

//funcion objeto literal y cadena de texto y devuelva true si el objeto tiene esa propiedad o
// false si no la tiene
function tieneProp(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad);
};

console.log(tieneProp(persona, "nombre"));
console.log(tieneProp(persona, "ocupación"));

//funcion objeto literal y devuelva array con todos los valores de sus propiedades
function obtenerValores(objeto) {
    return Object.values(objeto);
};

console.log(obtenerValores(persona));

//funcion dos objetos literales y devuelva true si tienen las mismas propiedades
// y los mismos valores o false si son diferentes
const persona2 = {
    nombre: "Martin",
    edad: 31,
    ocupacion: "Agronomo"
};

const persona3 = {
    nombre: "Violeta",
    edad: 1,
    ocupacion: "La bebe más linda"
};

const persona4 = {
    nombre: "Martin",
    edad: 31,
    ocupacion: "Agronomo"
}; 

function compararObjetos(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length != keys2.length) {
        return false;
    };

    for (let key of keys1) {
        if (obj1[key] != obj2[key]) {
            return false
        }
    }
    return true;
};

console.log(compararObjetos(persona2, persona3));
console.log(compararObjetos(persona2, persona4));

function otraFormaDeCompararObj(obj1, obj2) {
    return JSON.stringify(obj1) == JSON.stringify(obj2);
}; 

console.log(otraFormaDeCompararObj(persona2, persona3));
console.log(otraFormaDeCompararObj(persona2, persona4));

//funcion objeto literal y devuelva una copia exacta del objeto
function copiarObjetoOperadorDePropagacion(objeto) {
    return { ...objeto };
};

console.log(copiarObjetoOperadorDePropagacion(persona2));

function copiarObjetoConOA(objeto) {
    return Object.assign({}, objeto);
};

console.log(copiarObjetoConOA(persona3));

//funcion dos objetos literales y devuelva un nuevo objeto con todas las propiedades de ambos objetos. 
// si son iguales las propiedades el valor del segundo objeto deberá prevalecer
const bebe1 = {
    nombre:"Violeta",
    edad: 2
}; 

const bebe2 = {
    nombre: "Violeta",
    edad: 1, 
    ocupacion: "La bebe más linda"
};

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
};

console.log(combinarObjetos(bebe1, bebe2));
