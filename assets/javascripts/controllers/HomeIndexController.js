angular.module('RichardLamoste').controller('HomeIndexController', ['$scope','$sce','$timeout', function($scope,$sce,$timeout) {
	$scope.home = {
		title: 'Richard Lamoste',
		post: 'Hi! I\'m RICHARD LAMOSTE a talented <strong>front-end developer</strong> and passionate <strong>UI/UX designer</strong> from Philippines.'
	};

	$scope.introHTML = $sce.trustAsHtml($scope.home.post);

		var faces = ["face5","face4","face3","face2","face1"];
		var counter = 0;
		$scope.random = "";
		$scope.refresh = "";
		$scope.changeRandom = function(){
			$scope.random = "";
			if($scope.refresh == "no") {$scope.refresh = "yes";}
			else {$scope.refresh = "no";}
		    //$timeout(function(){$scope.random = faces[Math.floor(5*Math.random())];}, 1000);
		    $timeout(function() {
		    	counter = (counter + 1) % faces.length;
		    	$scope.random = faces[counter];
		    }, 1000);	
		};
}]);