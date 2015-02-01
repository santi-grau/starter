require(['backbone', 'text!data/strategies.json'],
	function(Backbone, Strategies){
		var App = Backbone.View.extend({
			el: 'window',
			initialize: function(){
				var strategies = $.parseJSON(Strategies);
				var selector = $('#main')
				selector
					.html(strategies[_.random(strategies.length)])
					.addClass('active');
			}
		});
		window.App = new App();
	}
);