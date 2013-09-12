// This controller retrieves data from the demoService and associates it with the $scope

demoApp.controller('DemoController', function ($scope, demoService) {
	init();

    function init() 
	{
        $scope.levels = demoService.getLevelsAndPages(); // call to load pages
        //$scope.matchQuiz = demoService.getMatchQuiz($scope); //call to retrieve Quiz Q&A		//alert("init called");

        $scope.quizQues = [
            'Functions as an air passage to fill the ink tank.',
            'A PCB that controls printer as a whole.',
            'Connects the carriage and the main controller with each other by a flat cable.',
            'A film on which slits are printed to generate an encoder pulse signal.',
            'Relays the head signals and performs pre-processing on the multi sensor signals.',
            'A head recovering unit that sucks the head to restore the clogged nozzles.'
        ];
        $scope.quizAns = [
            'Sub-buffer',
            'Main Controller',
            'Carriage Relay PCB',
            'Carriage Encoder',
            'Head Relay PCB',
            'Purge Unit'
        ];
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