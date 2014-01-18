'use strict';

var lrSnippet = require( 'grunt-contrib-livereload/lib/utils' ).livereloadSnippet;
var mountFolder = function( connect, dir ) {
	return connect.static( require( 'path' ).resolve( dir ) );
};

module.exports = function( grunt ) {

	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );
	require( 'time-grunt' )( grunt );

	grunt.initConfig( {

		watch : {

			livereload : {

				files : [

					'public/*.html'

				],

				tasks : [ 'exec' ],

				options : {

					livereload : true

				}

			}

		},

		express : {

			options : {

				port : 9000

			},

			dev : {

				options : {

					script : 'server/index.js'

				}

			},

			test : {

				options : {

					script : 'server/index.js'

				}

			}

		},

		open : {

			server : {

				path : 'http:localhost:<%= express.options.port %>'

			}

		}

	} );

	grunt.registerTask( 'default', function( target ) {

		if ( target === 'dist' ) {

			return grunt.task.run( [ 'build', 'open', 'connect:dist:keepalive' ] );

		}

		grunt.option( 'force', true );

		grunt.task.run( [
			'express:dev',
			'open',
			'watch'
		] );

	} );

};