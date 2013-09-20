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
        		$(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
				//ui.draggable.appendTo($(this));
				ui.draggable.addClass('dropped');
				console.log($(".dropped").length +" == "+ ($(".dropPlace").length))
				if($(".dropped").length == ($(".dropPlace").length)){ // All Droppped
					console.log("All Dropped");
					$("#blocks").fadeOut();
					$(".message").fadeOut();
					$("#success").show();
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
 })



