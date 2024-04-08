console.log( 'Bienvenidos al programa de IMC' );

// IMC = Peso (kg) / altura (m)^2

const persona1 = {
    nombre: 'Juan Carlos',
    peso: 54,
    altura: 1.66
}
const persona2 = {
    nombre: 'Juan Manuel',
    peso: 58,
    altura: 1.71
}

const estudiantes = [ persona1, persona2, {
    nombre: 'Ma Alejandra',
    peso: 64,
    altura: 1.76
} ];

console.log( '>>>', estudiantes );
console.log( 'Cantidad Estudiantes', estudiantes.length );
console.log( estudiantes[ 1 ].peso );
console.log( estudiantes[ 1 ][ 'peso' ] );



// let imc = persona.peso / (persona.altura * persona.altura);

// console.log( persona.nombre + ' ' + ' tiene un IMC de ' + imc );    // Concatenacion con el signo mas +
// console.log( `${ persona.nombre } tiene un IMC de: ${ imc }` );     //  Contatenacion usando la interpolacion (EcmaScript 2015)

// Condicionales
// if( imc < 18.5  ) {
//     alert( persona.nombre + ' estas muy flaquito' );
// }
// else if( imc >= 18.5 && imc < 24.9 ) {
//     alert( persona.nombre + ' estas una uva' );
// }
// else if( imc >= 24.9 && imc < 29.9 ) {
//     alert( persona.nombre + ' hey a mover el bote estas gordito' );
// }
// else {
//     alert( persona.nombre + ' vas rodando rodando ' );
// }
