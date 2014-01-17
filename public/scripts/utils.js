'use strict';

define( function( require ) { 

	function Utils() {};

	Utils.prototype.toTimer = function( duration ) {

		var hours 	= Math.floor( duration / 3600 );
		var minutes	= Math.floor( ( duration - ( hours * 3600 ) ) / 60 );
		var seconds = Math.floor( duration - ( hours * 	3600 ) - ( minutes * 60 ) );

		if( hours < 10 ) {
			hours = '0' + hours;
		}

		if( minutes < 10 ) {
			minutes = '0' + minutes;
		}

		if( seconds < 10 ) {
			seconds = '0' + seconds;
		}

		var time = hours + ':' + minutes + ':' + seconds;

		return time;

	};

	return Utils;

} );