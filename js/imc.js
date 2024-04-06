console.log( 'Bienvenidos al programa de IMC' );

// IMC = Peso (kg) / altura (m)^2

let nombre = 'Juan';
let peso = 54;
let altura = 1.66;

let imc = peso / (altura * altura);

console.log( nombre + ' ' + ' tiene un IMC de ' + imc );    // Concatenacion con el signo mas +
console.log( `${ nombre } tiene un IMC de: ${ imc }` );     //  Contatenacion usando la interpolacion (EcmaScript 2015)

// Condicionales
if( imc < 18.5  ) {
    alert( nombre + ' estas muy flaquito' );
}
else if( imc >= 18.5 && imc < 24.9 ) {
    alert( nombre + ' estas una uva' );
}
else if( imc >= 24.9 && imc < 29.9 ) {
    alert( nombre + ' hey a mover el bote estas gordito' );
}
else {
    alert( nombre + ' vas rodando rodando ' );
}

nombre = 'Javier';
peso = 64;
altura = 1.56;

imc = peso / (altura * altura);

console.log( nombre + ' ' + ' tiene un IMC de ' + imc );    // Concatenacion con el signo mas +
console.log( `${ nombre } tiene un IMC de: ${ imc }` );     //  Contatenacion usando la interpolacion (EcmaScript 2015)

// Condicionales
if( imc < 18.5  ) {
    alert( nombre + ' estas muy flaquito' );
}
else if( imc >= 18.5 && imc < 24.9 ) {
    alert( nombre + ' estas una uva' );
}
else if( imc >= 24.9 && imc < 29.9 ) {
    alert( nombre + ' hey a mover el bote estas gordito' );
}
else {
    alert( nombre + ' vas rodando rodando ' );
}




