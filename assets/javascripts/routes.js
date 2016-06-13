angular.module('RichardLamoste').config(function($routeProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/home'
		})

		.when('/home', {
			templateUrl: "assets/templates/home/index.html",
			controller: "HomeIndexController"
		})

		.when('/about', {
			templateUrl: "assets/templates/about/index.html",
			controller: "AboutIndexController"
		})		
				
		.when('/works', {
			templateUrl: "assets/templates/works/index.html",
			controller: "WorksIndexController"
		})

		.when('/contact', {
			templateUrl: "assets/templates/contact/index.html",
			controller: "ContactIndexController"
		})				
});