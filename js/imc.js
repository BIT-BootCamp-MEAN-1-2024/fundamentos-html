console.log( 'Bienvenidos al programa de IMC' );

// IMC = Peso (kg) / altura (m)^2

let nombre = 'Juan';
let peso = 56;
let altura = 1.66;

let imc = peso / (altura * altura);

console.log( nombre + ' ' + ' tiene un IMC de ' + imc );    // Concatenacion con el signo mas +
console.log( `${ nombre } tiene un IMC de: ${ imc }` );     //  Contatenacion usando la interpolacion (EcmaScript 2015)

