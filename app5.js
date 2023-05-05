angular.module('myApp', [])
	.controller('myCtrl', function ($scope) {
		$scope.users = ['Eren', 'Armin', 'Mikasa'];
		$scope.remainingUsers = ['Levi', 'Erwin', 'Hanjy'];

		$scope.addUser = function () {
			if ($scope.remainingUsers.length > 0) {
				$scope.users.push($scope.remainingUsers.shift());
			}
			if ($scope.remainingUsers.length == 0) {
				$scope.users.sort();
			}
		};
	});
