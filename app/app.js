var demoApp = angular.module("demoApp", []);

//Setting routes
demoApp.config(function ($routeProvider) {
	$routeProvider
		.when('/home',
			{
				controller: "DemoController",
				templateUrl: "app/partials/home.html"
			})
		.when('/pages/:levelID/:pageID',
			{
				controller: "DemoController",
				templateUrl: function(params){ return "app/partials/Page" + params.levelID +"."+ params.pageID + ".html"; }
			})

		.otherwise({redirectTo: '/home'});
});

demoApp.directive('draggable', function() {
  return {
    // A = attribute, E = Element, C = Class and M = HTML Comment
    restrict:'A',
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    link: function(scope, element, attrs) {
      element.draggable({
	      revert: 'invalid',
	      start: function(e, ui){
	          $(this).hide();
	          $(ui.helper).addClass('elHoverClass');
	      },
	      stop: function(e, ui){
	          $(this).show();
	          $(ui.helper).removeClass('elHoverClass');
	      },
	      appendTo: 'body',
	      scroll: false,
	      helper: 'clone',
	      cursor: "move"
      });
    }
  };
});

demoApp.directive('droppable', function($compile) {
  return {
    restrict: 'A',
    link: function(scope,element,attrs){
      //This makes an element Droppable
      element.droppable({
        drop:function(event,ui) {
        	var currClass = $(ui.draggable).children("img").attr("class");
        	if($(this).hasClass(currClass)){
				ui.draggable.appendTo($(this));
				//ui.draggable.css('width', '95%');
				ui.draggable.addClass('dropped');
				if($(".dropped").length == ($(".dropContainer").length)-1){ // All Droppped
					console.log("All Dropped");
					$(".message").hide();
				}
			}else{

			}
        }
      });
    }
  };
});

demoApp.directive('dropback', function($compile) {
  return {
    restrict: 'A',
    link: function(scope,element,attrs){
      //This makes an element Droppable
      element.droppable({
        drop:function(event,ui) {
			ui.draggable.removeAttr('style').prependTo($(this));
			ui.draggable.css('max-height', '55%');
			ui.draggable.wrap('<li>');
			ui.draggable.removeClass('dropped');
        }
      });
    }
  };