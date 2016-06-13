angular.module('RichardLamoste').controller('ContactIndexController', ['$scope','$http', function($scope,$http){
	$scope.url = '../../../process.php';
	$scope.formsubmit = function(isValid) {
	    if (isValid) {
	        $http.post($scope.url, {"name": $scope.name, "email": $scope.email, "message": $scope.message}).
	            success(function(data, status) {
	                console.log(data);
	                $scope.status = status;
	                $scope.data = data;
	                $scope.result = data; // Show result from server in our <pre></pre> element
	            })
	    } else {
			console.log("error");
			$scope.result = "Error";
	    } 
	}
}]);