/**
 * Support for Bootstrap.
 *
 * @package Follet_Theme
 * @since   1.0
 */
jQuery( document ).ready( function( $ ) {
	$( 'table' ).addClass( 'table' );
	$( 'input[type="button"], input[type="submit"], button' ).addClass( 'btn' );
	$( '.pushbutton-wide' ).addClass( 'btn-primary' ).addClass( 'btn-lg' );
	$( 'input[type="text"], input[type="password"], input[type="email"], select, textarea' ).addClass( 'form-control' );
	$( '#primary select, #secondary select, #footer select' ).addClass( 'form-control' );
});