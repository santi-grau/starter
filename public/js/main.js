// ┌────────────────────────────────────────────────────────────────────┐
// | main.js
// └────────────────────────────────────────────────────────────────────┘
'use strict';
require.config({
	paths: {
		jquery: 'libs/jquery/dist/jquery',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone'
	}
});
require(['backbone'],
	function(Backbone){
		var App = Backbone.View.extend({
			el: 'window',
			initialize: function(){
				$('body').css('background', '#F00')
			}
		});
		window.App = new App();
	}
);