const $form = document.querySelector( '.form' );
// console.log( $form );

$form.addEventListener( 'submit', function( e ) {
    e.preventDefault();

    const $input = document.querySelector( '[data-input-nombre]' );
    console.log( $input.value );

    const nombreProducto = document.querySelector( '[data-input-nombre]' ).value;
    const cantidadProducto = document.querySelector( '[data-input-cantidad]' ).value;
    const precioProducto = document.querySelector( '[data-input-precio]' ).value;

    console.log( nombreProducto, cantidadProducto, precioProducto );

    const product = {
        nombre: nombreProducto,
        cantidad: cantidadProducto,
        precio: precioProducto
    }

    console.log( product );

    localStorage.setItem( 'producto', JSON.stringify( product ) );

} );