// This controller retrieves data from the demoService and associates it with the $scope

demoApp.controller('DemoController', function ($scope, demoService) {
	init();

    function init() 
	{
        $scope.levels = demoService.getLevelsAndPages();
	}
});

function animation($scope,$timeout) {
	$scope.anim1Start = function(){
        //alert("Animation Start")
    	//jQuery("#anim1").attr("src","http://placehold.it/500x207/ffffff/ffffff/");
    	jQuery("#anim1").append("<img src='img/anim1.gif?p"+new Date().getTime()+"'/>");
    	$timeout($scope.anim1Over, 4000);
    }
    $scope.anim1Over = function(){
    	jQuery("#anim2Link").show();
    }
    $timeout($scope.anim1Start, 2000); // start animation after 5 seconds
    
    $scope.anim2Link = function(){
    	jQuery("#anim2Link").hide();
    	jQuery("#anim1").hide();
		jQuery("#anim2").append("<img src='img/anim2.gif?p"+new Date().getTime()+"'/>");
    	jQuery("#anim2").show();
        //$timeout.cancel(mytimeout);
    }         
}

function animation2($scope,$timeout) {
	$scope.anim1Start = function(){
    	jQuery("#anim1").append("<img src='img/anim1.gif?p"+new Date().getTime()+"'/>");
    	$timeout($scope.anim1Over, 4000);
    }
    $scope.anim1Over = function(){
    	jQuery("#anim2Link").show();
    }
    $timeout($scope.anim1Start, 2000); // start animation after 5 seconds
    
    $scope.anim2Link = function(){
    	jQuery("#anim2Link").hide();
		jQuery("#anim2").append("<img src='img/anim2.gif?p"+new Date().getTime()+"'/>");
    	jQuery("#anim2").show();
    }         
}