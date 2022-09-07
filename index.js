var config = {
	host: "qlikdevel.ajanta.com",
	prefix: "/sess/",
	port: 443,
	isSecure: true
};

require.config( {
	baseUrl: "https://qlikdevel.ajanta.com/sess/resources"
} );

require(["js/qlik"], function(qlik) {
	// open the app
	var app = qlik.openApp('8ff53ca5-172d-4200-8fb6-8b7def1c0038', config);
	// insert Qlik objects into the page.
	app.getObject(document.getElementById('QV01'), 'AcjpS');
});
