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
    	jQuery("#anim1").append("<img src='img/anim1.gif?p"+new Date().getTime()+"'/>");
    	$timeout($scope.anim1Over, 4000); // Stop animation after 4 seconds
    }
    $scope.anim1Over = function(){
    	jQuery("#anim2Link").show();
    }
    $timeout($scope.anim1Start, 2000); // Start animation after 2 seconds
    
    $scope.anim2Link = function(){
    	jQuery("#anim2Link").hide();
    	jQuery("#anim1").hide();
		jQuery("#anim2").append("<img src='img/anim2.gif?p"+new Date().getTime()+"'/>");
    	jQuery("#anim2").show();
    }         
}

function animation2($scope,$timeout) {
	$scope.anim1Start = function(){
    	jQuery("#anim1").append("<img src='img/anim1.gif?p"+new Date().getTime()+"'/>");
    	$timeout($scope.anim1Over, 4000); // Stop animation after 4 seconds
    }
    $scope.anim1Over = function(){
    	jQuery("#anim2Link").show();
    }
    $timeout($scope.anim1Start, 2000); // Start animation after 2 seconds
    
    $scope.anim2Link = function(){
    	jQuery("#anim2Link").hide();
		jQuery("#anim2").append("<img src='img/anim2.gif?p"+new Date().getTime()+"'/>");
    	jQuery("#anim2").show();
    }         
}


function videoAnim($scope, $timeout){
    $scope.baseImage = "img/videoanim/computing.jpg"; // Default background image
    $scope.anim1 =  "img/videoanim/iphone.png"; // Default comparison background animation 1 image
    $scope.anim2 =  "img/videoanim/iphone.png"; // Default comparison background animation 2 image
    $scope.audioFile = [{audio:"img/videoanim/welcome.mp3", duration:"3000"}];

    // Calling animation icons and comparison graphics using array
	// This data would be retrieved via services
    $scope.linkIcons = [{icon:"img/videoanim/image3.png", // Icon Image 1
                        anim1:"img/videoanim/icon02a2.gif", anim2:"img/videoanim/icon02a1.gif", // Comparison Images
                        anim1text:"Visiting a blog: 23s", anim2text:"Visiting a blog:  5s"},  // Comparison Text

                        {icon:"img/videoanim/image6.png", // Icon Image 2
                        anim1:"img/videoanim/icon01a2.gif", anim2:"img/videoanim/icon01a1.gif", // Comparison Images
                        anim1text:"Playing video: 51s", anim2text:"Playing video: 12s"},  // Comparison Text

                        {icon:"img/videoanim/image9.png", // Icon Image 3
                        anim1:"img/videoanim/icon03a2.gif", anim2:"img/videoanim/icon03a1.gif", // Comparison Images
                        anim1text:"Playing music: 37s", anim2text:"Playing music: 7s"}  // Comparison Text
                        ];

    var icons = [];
    var linkIcons = $scope.linkIcons;
    for(var i=0;i<(linkIcons.length);i++) {
      icons.push(linkIcons[i].icon);
    }
    $scope.icons = icons;
    $scope.iconAction = function(idx){
        var selIndex = $scope.linkIcons[idx];
        $scope.anim1 = selIndex.anim1;
        $scope.anim2 = selIndex.anim2;
        $scope.result1 = selIndex.anim1text;
        $scope.result2 = selIndex.anim2text;
        $scope.toggle = true;
    }   

    $scope.showNav = function(){
        $scope.toggleNav = true;
        $timeout($scope.showComp, 4000);
    }
    $scope.showComp = function(){
        $scope.toggleComparison = true;
    }
    $timeout($scope.showNav, 4000); // Show icons
}


function puzzleCtrl($scope, $timeout){
    var initPuzzle = 5; // Available options are 4/5/6
    ///////////////////////////////////////////////////////
    var oddAdd = 0;
    var height = 0;
    var invalidSlides = 2;
    $scope.initPuzzle = initPuzzle;

    // Calling text for puzzle blocks
    $scope.blockText = ["Staff Engagement","Honesty & Fairness","Customer Driven","Simplicity & Excellence","Corporate Citizenship","Profit Driven","Customer Engagement", "Result Oriented"];
    // Puzzle graphics called using the dir in img/puzzle/{initPuzzle}/
    if(initPuzzle % 2){
        oddAdd = 1;
        height=(((initPuzzle+oddAdd)/2)*198)-((initPuzzle+oddAdd)*28);
    }else{
        height=((initPuzzle/2)*198)-(initPuzzle*28);
    }
    $scope.height = height;
    ///////////////////////////////////////////////////////
    var blocks = [];
    for(var i=1;i<=(initPuzzle+invalidSlides);i++) {
      blocks.push("img/puzzle/"+initPuzzle+"/"+i+".png");
    }
    $scope.blocks = blocks;
    ///////////////////////////////////////////////////////
    $scope.random = function() {
        return Math.floor(0.5 - Math.random());
    }
}

