angular.module("RichardLamoste").directive('pageNav', function(){
	return {
		replace: true,
		restrict: "E",
		templateUrl: "assets/templates/directives/pageNav.html",
		controller: function($scope, $location){
			$scope.isPage = function(name){
				return new RegExp("/" + name + "($|/)").test($location.path());
			};

			$scope.class = "no";
			$scope.gicon = "fa-bars";
			$scope.changeClass = function(){
				if ($scope.class === "no") 
					$scope.class = "yes";
				else 
					$scope.class = "no";
				if ($scope.gicon === "fa-bars") 
					$scope.gicon = "fa-close";
				else 
					$scope.gicon = "fa-bars";				
			};
		}
	};
});