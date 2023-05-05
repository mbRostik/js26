var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
	$scope.workers = {
		'Yrkaina': ['Kuiv', 'Chernivtsi'],
		'Iaponia': ['Tokio', 'Kioto'],
		'Kutai': ['Pekin', 'Shanhai']
	};
});