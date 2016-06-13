angular.module('RichardLamoste').controller('AboutIndexController', ['$scope','$sce','$timeout', function($scope,$sce,$timeout) {
	$scope.about = {
		title: 'Hello! Kamusta?',
		post: 'I\'m a talented front-end developer saying hello from Philippines. I found your post from weworkremotely.com and I’m very interested to take the open position by any means necessary in a non-violent way of course. I think I will be a great addition to your team and will be a huge asset for the company’s continuous success. <br/><br/> If you have a moment to review my attached resume that will be awesome, I have added my recent works and all my qualifications for this position. '
	};
	$scope.aboutHTML = $sce.trustAsHtml($scope.about.post);
}]);