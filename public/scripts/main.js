'use strict';

define( function( require ) { 

	var jsplayer = require( 'jwplayer' );

	var Utils	 = require( 'utils' );
	var utils = new Utils();

	var playPause 	= document.getElementById( 'playPause' );
	var min 	  	= document.getElementById( 'min' );
	var max 	  	= document.getElementById( 'max' );
	var fullscreen 	= document.getElementById( 'fullscreen' );
	var fileInfo	= document.getElementById( 'fileInfo' );	
	var spanInitialLength = document.createElement( 'div' );
	var spanTotalLength   = document.createElement( 'div' );

	jwplayer("myElement").setup( {

		'flashplayer'	: '/swf/jwplayer.flash.swf',
		
		'file' 			: '/assets/bigbuck.mp4',
		
		'image' 		: '',
		
		'controls'		: false
	
	} );

	jwplayer( 'myElement').onReady( function() { 

		//Todo display initial progress state and final state

		fileInfo.appendChild( spanInitialLength );
		spanInitialLength.innerHTML = utils.toTimer( jwplayer( 'myElement' ).getPosition() );

		fileInfo.appendChild( spanTotalLength );
		spanTotalLength.innerHTML = utils.toTimer( 0 );

		console.log( length );

	} );

	jwplayer( 'myElement' ).onBeforePlay( function() { 


	} );

	jwplayer( 'myElement').onPlay( function() { 	

	} );

	jwplayer( 'myElement' ).onTime( function( duration, position ) { 

		var obj = {

			'getPosition' 		: jwplayer( 'myElement' ).getPosition(),

			'getDuration'	: jwplayer( 'myElement').getDuration(),

			'duration'		: duration,

			'position'		: position

		};

		spanInitialLength.innerHTML = utils.toTimer( obj.getPosition ) ;

		fileInfo.appendChild( spanTotalLength );
		spanTotalLength.innerHTML = utils.toTimer( jwplayer( 'myElement').getDuration() );

		console.log( obj );

	} );

	jwplayer( 'myElement' ).onBufferChange( function( buffer ) { 
				
		//Todo calculate buffer rate and display it
		console.log( buffer.bufferPercent );

	} );

	jwplayer( 'myElement' ).onComplete( function() { 

		fileInfo.appendChild( spanInitialLength );
		spanInitialLength.innerHTML = utils.toTimer( 0 );

		fileInfo.appendChild( spanTotalLength );
		spanTotalLength.innerHTML = utils.toTimer( 0 );		

	} );

	playPause.addEventListener( 'click', function() {
				
	var obj = document.getElementById( 'playPause' );

		switch( jwplayer( "myElement" ).getState() ) {

			case 'PLAYING' :

				jwplayer( "myElement" ).pause( true );
				obj.innerHTML = 'Play';

			break;
					
			default :

				jwplayer( "myElement" ).play( true );
				obj.innerHTML = 'Pause';

			break;

		}

	} );

	min.addEventListener( 'click', function() { 

		var volume = jwplayer( 'myElement' ).getVolume();

		if( volume !== 0 ) {

			jwplayer( 'myElement' ).setVolume( volume - 1 );

		}

		console.log( volume );

	} );

	max.addEventListener( 'click', function() { 

		var volume = jwplayer( 'myElement' ).getVolume();

		if( volume !== 100 ) {

			jwplayer( 'myElement' ).setVolume( volume + 1 );

		}

		console.log( volume );

	} );

	fullscreen.addEventListener( 'click', function() { 

		//Todo make player fullscreen
		console.log( 'fullscreen is emitted' );

	} );	

} );