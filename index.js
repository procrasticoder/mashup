var config = {
	host: "qlikdevel.ajanta.com",
	prefix: "/sess/",
	port: 443,
	isSecure: true
};

require.config( {
	baseUrl: "https://qlikdevel.ajanta.com/sess/resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

    console.log('123')


} );