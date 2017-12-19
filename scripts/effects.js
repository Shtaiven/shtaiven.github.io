var FADE_DURATION = 1000;

$( document ).ready( function() {
    // Init page
    $( '.page-content' ).hide();
    $( '.masthead' ).hide();
    $( '.page-content' ).css( 'visibility', 'visible' );
    $( '.masthead' ).css( 'visibility', 'visible' );
    $( '#home-page' ).fadeIn( FADE_DURATION );
    $( '.masthead' ).fadeIn( FADE_DURATION );

    // Menu button handler
    $( '.nav-link' ).click( function() {
        $( '.page-content' ).hide();
        $( '.nav-link' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
        var button_href = $( this ).attr( 'href' );
        $( button_href ).fadeIn( FADE_DURATION );
    });
});