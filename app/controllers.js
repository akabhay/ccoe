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


function videoAnim($scope, $timeout){
    $scope.baseImage = "img/videoanim/computing.jpg";
    $scope.anim1 =  "img/videoanim/iphone.png"; // Default animation 1 image
    $scope.anim2 =  "img/videoanim/iphone.png"; // Default animation 2 image
    $scope.audioFile = [{audio:"img/videoanim/welcome.mp3", duration:"3000"}];

    $scope.linkIcons = [{icon:"img/videoanim/image3.png", // Icon Image
                        anim1:"img/videoanim/icon01a2.gif", anim2:"img/videoanim/icon01a1.gif", // Comparison Images
                        anim1text:"Create new blog: 37s", anim2text:"Create new blog: 7s"},  // Comparison Text

                        {icon:"img/videoanim/image6.png", // Icon Image
                        anim1:"img/videoanim/icon01a2.gif", anim2:"img/videoanim/icon01a1.gif", // Comparison Images
                        anim1text:"Create new blog: 37s", anim2text:"Create new blog: 7s"},  // Comparison Text

                        {icon:"img/videoanim/image9.png", // Icon Image
                        anim1:"img/videoanim/icon01a2.gif", anim2:"img/videoanim/icon01a1.gif", // Comparison Images
                        anim1text:"Create new blog: 37s", anim2text:"Create new blog: 7s"}  // Comparison Text
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


function puzzle($scope, $timeout){
    var initPuzzle = 6;
    var invalidSlides = 2;
    $scope.initPuzzle = initPuzzle;

    $scope.blockText = ["A","B","C","D","E","F","P", "N"];

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

