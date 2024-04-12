// DOM: Document Object Model

    // const $title = document.getElementById( 'title' );
    // console.log( $title );
    
    // const $description = document.getElementsByClassName( 'description' );
    // console.log( $description );
    
    // const $paragraph = document.getElementsByTagName( 'p' );
    // console.log( $paragraph );

    const $btnForm = document.getElementById( 'btn-calcular' );
    console.log( $btnForm );

    $btnForm.addEventListener( 'click', function( event ) {
        event.preventDefault();

        // console.log( 'Uy me has dado click' );
        // // alert( 'Uy me diste click' );

        const $nombre = document.querySelector( '#nombre' );
        const $altura = document.querySelector( '.altura' );
        const $peso = document.querySelector( 'input#peso.peso' );

        console.log( $nombre, $altura, $peso );

        const nombre = $nombre.value;
        const altura = $altura.value;
        const peso = $peso.value;

        console.log( nombre, altura, peso );

        $nombre.value = '';
        $altura.value = '';
        $peso.value = '';

        /** IMC */
        const imc = peso / ( altura * altura );
        let message = '';
        console.log( imc );

        if( imc < 18.5 ) {
            message = 'Estas flaquito a comer';
        }
        else if( imc < 24.9 ) {
            message = 'Todo todo bien';
        }
        else if( imc < 29.9 ) {
            message = 'Con kilostos de mas... nooo?';
        }
        else {
            message = 'A correr a correr y aparar de comer';
        }

        let html = `
            <h2>${ nombre }</h2>
            <p class="imc">${ imc.toFixed( 2 ) }</p>
            <p class="message">${ message }</p>
        `;
        
        document.getElementById( 'message' ).innerHTML = html;


    });
