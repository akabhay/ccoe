// This controller retrieves data from the demoService and associates it with the $scope

demoApp.controller('DemoController', function ($scope, demoService) {
	init();

    function init() 
	{
        $scope.levels = demoService.getLevelsAndPages();
	}
});

