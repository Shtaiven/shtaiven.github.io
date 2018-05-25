var FADE_DURATION = 1000;

$( document ).ready( function() {
    // Init page
    $( '.page-content' ).hide();
    $( '.masthead' ).hide();
    $( '.page-content' ).css( 'visibility', 'visible' );
    $( '.masthead' ).css( 'visibility', 'visible' );
    $( '.masthead' ).fadeIn( FADE_DURATION );

    // If a specific page is selected, show it, otherwise show home
    if ( window.location.hash ) {
        var hash = window.location.hash;
        $ ( hash ).fadeIn( FADE_DURATION );
        $( '.nav-link' ).removeClass( 'active' );
        $( '.nav-link' )
            .filter( function( index ) {
                return $( this ).attr( 'href' ) === hash;
            })
            .addClass( 'active' );
    } else {
        $( '#home-page' ).fadeIn( FADE_DURATION );
    }

    // Menu button handler
    $( '.nav-link' ).click( function() {
        $( '.page-content' ).hide();
        $( '.nav-link' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
        var button_href = $( this ).attr( 'href' );
        $( button_href ).fadeIn( FADE_DURATION );
    });
});