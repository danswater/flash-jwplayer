'use strict';

var express = require( 'express' );
var http 	= require( 'http' );
var path 	= require( 'path' );

var app 	= express();

app.set( 'port', 9000 );

app.use( express.static( path.join( __dirname, '../public') ) );

app.use( function( err, request, response, next ) { 

	if( !err ) return next();
	console.log( err );

} );

app.use( function( request, response, next ) { 

	console.log( '%s : %s - %s', new Date, request.method, request.url );
	next();

} );

app.get( '/', function( request, response ) { 

	response.sendfile( path.join( __dirname, '../public/index.html' ) );

} );

var server  = http.createServer( app ).listen( app.get( 'port' ), function() { 

	console.log( 'Server running at port %s', app.get( 'port' ) );

} );