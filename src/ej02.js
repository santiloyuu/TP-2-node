/* Importo la constante PI y la función sumar del módulo matematica. */
import {pares, PI, sumar, multiplicar, restar, dividir} from './modules/matematica.js';
let total, total2, total3, total4, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
console.log(`Los numeros pares son ´'${pares}'`)
total = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
total2 = multiplicar(numero1, numero2)
console.log(`multiplicar(${numero1}, ${numero2}) = ${total2}`);
total3 = restar(numero1, numero2)
console.log(`restar(${numero1}, ${numero2}) = ${total3}`);
total4 = dividir(numero1, numero2)
console.log(`dividir(${numero1}, ${numero2}) = ${total4}`);

