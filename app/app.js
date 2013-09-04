var demoApp = angular.module("demoApp", []);

//Setting routes
demoApp.config(function ($routeProvider) {
	$routeProvider
		.when('/home',
			{
				controller: "DemoController",
				templateUrl: "app/partials/home.html"
			})
		.when('/pages/:levelID/:pageID',
			{
				controller: "DemoController",
				templateUrl: function(params){ return "app/partials/Page" + params.levelID +"."+ params.pageID + ".html"; }
			})

		.otherwise({redirectTo: '/home'});
});

