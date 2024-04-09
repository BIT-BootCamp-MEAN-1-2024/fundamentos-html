// console.log( 'Bienvenidos al programa de IMC' );

// // IMC = Peso (kg) / altura (m)^2

// const persona1 = {
//     nombre: 'Juan Carlos',
//     peso: 54,
//     altura: 1.66
// }
// const persona2 = {
//     nombre: 'Juan Manuel',
//     peso: 58,
//     altura: 1.71
// }

// const estudiantes = [ persona1, persona2, {
//     nombre: 'Ma Alejandra',
//     peso: 64,
//     altura: 1.76
// },
// {
//     nombre: 'Laura',
//     peso: 55,
//     altura: 1.50
// } ];

// Bucle: Es una forma de iterar elementos o simplemente hacer hacer iteraciones
//        Los bucles en JS son: for, while, do-while

// for( inicio; condicion; incremento/decremento)
// for( let i = 0; i < 10; i++ ) {
//     console.log( i );
// }

// Estraer los nombres de los estudiantes
// for( let i = 0; i < estudiantes.length; i++ ) {
//     console.log( estudiantes[ i ].nombre );
// }

// for( let i = 0; i < estudiantes.length; i++ ) {
//     const imc = `${ estudiantes[ i ].peso / ( estudiantes[ i ].altura * estudiantes[ i ].altura ) }`;

//     console.log( `${ estudiantes[ i ].nombre } tu IMC es: ${ imc } `);

//     // Condicionales
//     if( imc < 18.5  ) {
//         alert( estudiantes[ i ].nombre + ' estas muy flaquito' );
//     }
//     else if( imc >= 18.5 && imc < 24.9 ) {
//         alert( estudiantes[ i ].nombre + ' estas una uva' );
//     }
//     else if( imc >= 24.9 && imc < 29.9 ) {
//         alert( estudiantes[ i ].nombre + ' hey a mover el bote estas gordito' );
//     }
//     else {
//         alert( estudiantes[ i ].nombre + ' vas rodando rodando ' );
//     }

// }


// function saluda() {
//     console.log( 'Hola!' );
// }

// saluda();
// saluda();
// saluda();

// function saluda( nombre, apellido ) {
//     console.log( 'Hola, ' + nombre + ' ' + apellido );
// }

// saluda( 'Javier', 'Suarez' );
// saluda( 'Laura',  'Campos' );
// saluda( 'Juan', 'Ramirez' );

const listaEstudiantes = [ 'Javier Suarez', 'Laura Campos', 'Juan Ramirez' ];

function saluda( lista ) {
    for( let i = 0; i < lista.length; i++ ) {
        console.log( lista[ i ] );
    }
}

saluda( listaEstudiantes );

