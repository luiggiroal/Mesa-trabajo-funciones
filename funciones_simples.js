/* Se añade el uso del paquete 'prompt-sync' */
const prompt = require('prompt-sync')({ sigint: true });

/*--------------------------*/
/* DECLARACIÓN DE FUNCIONES */
/*--------------------------*/

/* 1.Conversor de pulgadas a centímetros */
let pulgCm = (medida) =>
  `${medida} pulgada(s) es equivalente a ${(medida * 2.74).toFixed(
    2
  )} centímetros`;

/* 2.Conversor de un String a una URL */
let stringURL = (string) =>
  `La URL de "${string}" es "http://www.${string}.com"`;

/* 3.Conversor de un String a una versión con signos de admiración */
let stringAdmi = (string) => `¡${string}!`;

/* 4.Conversor de edad humana a edad de perros */
let humanoPerro = (edadHumano) =>
  `${edadHumano} año(s) de humano es equivalente a ${
    edadHumano * 7
  } año(s) de perro.`;

/* 5.Conversor de sueldo mensual a valor de hora de trabajo */
let sueldoValHoraTrabajo = (sueldo) => {
  const HrsDeTrabajo = 40;
  return `$${(sueldo / HrsDeTrabajo).toFixed(
    2
  )} es el valor de tu hora de trabajo.`;
};

/* 6.Calculador de IMC */
let IMC = (altura, peso) =>
  `Su IMC es de ${(peso / Math.pow(altura, 2)).toFixed(2)}`;

/* 7.Conversor de minúscula a mayúscula */
let minMay = (string) => string.toUpperCase();

/* 8.Saber el tipo de dato */
let tipoDato = (objeto) => typeof objeto;

/* 9.Saber la circunferencia a partir del radio del círculo */
let circunferencia = (radio) =>
  `La circunferencia es de ${(2 * Math.PI * radio).toFixed(2)}`;

/*----------------------*/
/* LLAMADA DE FUNCIONES */
/*----------------------*/

console.log(pulgCm(prompt('1.Ingrese una medida en pulgadas: ')));
console.log(
  stringURL(prompt('2.Ingrese un String para convertirlo en una URL: '))
);
console.log(
  stringAdmi(prompt('3.Ingrese un String para añadir signos de admiración: '))
);
console.log(humanoPerro(prompt('4.Ingrese una edad de humanos: ')));
console.log(sueldoValHoraTrabajo(prompt('5.Ingrese su sueldo mensual: ')));
console.log(
  IMC(
    prompt('6.Ingrese su altura en metros: '),
    prompt('6.Ingrese su peso en kilogramos: ')
  )
);
console.log(
  minMay(prompt('7.Ingrese un String para convertirlo en mayúsculas: '))
);
console.log(tipoDato(10));
console.log(tipoDato(true));
console.log(tipoDato('Esto es un string'));
console.log(circunferencia(prompt('9.Ingrese el valor del radio: ')));
