	// create the module and name it alanSiteApp
	var alanSiteApp = angular.module('alanSiteApp', ['ngRoute']);

	// configure our routes
	alanSiteApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/works.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the works page
			.when('/works', {
				templateUrl : 'pages/works.html',
				controller  : 'worksController'
			})

			.when('/works1', {
				templateUrl : 'pages/works/works1.html',
				controller  : 'worksController'
			})

			.when('/works2', {
				templateUrl : 'pages/works/works2.html',
				controller  : 'worksController'
			})

			.when('/works3', {
				templateUrl : 'pages/works/works3.html',
				controller  : 'worksController'
			})

			.when('/works4', {
				templateUrl : 'pages/works/works4.html',
				controller  : 'worksController'
			})

			.when('/works5', {
				templateUrl : 'pages/works/works5.html',
				controller  : 'worksController'
			})

			.when('/works6', {
				templateUrl : 'pages/works/works6.html',
				controller  : 'worksController'
			})

			.when('/works7', {
				templateUrl : 'pages/works/works7.html',
				controller  : 'worksController'
			})

			.when('/works8', {
				templateUrl : 'pages/works/works8.html',
				controller  : 'worksController'
			})

			.when('/works9', {
				templateUrl : 'pages/works/works9.html',
				controller  : 'worksController'
			});
	});

	// create the controller and inject Angular's $scope
	alanSiteApp.controller('mainController', function($scope) {
	});

	alanSiteApp.controller('aboutController', function($scope) {
	});

	alanSiteApp.controller('worksController', function($scope) {
	});

	alanSiteApp.controller('contactController', function($scope) {
	});
