/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.
   // Tu código:
   if (x === y) 
    return true;
    else 
    return false;

   //  return x === y ? true : false 
   // otra opcion de como dar solucion al ejercicio 
}

function tienenMismaLongitud(str1, str2) {
   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:
   // if (str1.length === str2.length)
   // return true;
   // else
   // return false;

   return str1.length === str2.length ? true : false
   // otra forma de dar respuesta al ejercicios
}

function menosQueNoventa(num) {
   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:

   // if (num < 90)
   // return true;
   // else 
   // return false;

   return num < 90 ? true : false
}

function mayorQueCincuenta(num) {
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
   return num > 50 ? true : false

   // if (num > 50) 
   // return true;
   // else
   // return false;
}

function esPar(num) {
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
   if ((num % 2) == 0) return true;
   else return false;
}

function esImpar(num) {
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
   return (num % 2) !== 0 ? true : false
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
