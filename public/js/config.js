// ┌────────────────────────────────────────────────────────────────────┐
// | main.js
// └────────────────────────────────────────────────────────────────────┘
'use strict';
require.config({
	paths: {
		text: 'libs/text/text',
		jquery: 'libs/jquery/dist/jquery.min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone'
	},
	deps: ['views/main']
});