demoApp.service('demoService', function () {
    this.getLevelsAndPages = function () {
        return _levels;
    };

	//Currently hardcoded
	var _levels = [
		{name:'Level 1', id:'1', pages:[
			{name:'Sample 1', id:'1', url:'page1'}, 
			{name:'Sample 2', id:'2', url:'page2'}, 
			{name:'Sample 3', id:'3', url:'page3'}, 
		]},
		{name:'Level 2', id:'2', pages:[
			{name:'Sample 1', id:'1', url:'page1'}, 
			{name:'Sample 2', id:'2', url:'page2'}, 
			{name:'Sample 3', id:'3', url:'page3'},
			{name:'Sample 4', id:'4', url:'page4'}

		]},
		{name:'Level 3', id:'3', pages:[
			{name:'Sample 1', id:'1', url:'page1'}, 
			{name:'Sample 2', id:'2', url:'page2'}, 
		]}
	];

});
/*
(function($){
  $.fn.shuffle = function() {
    return this.each(function(){
      var items = $(this).children();
      return $(this).html(items);
      return (items.length) 
        ? $(this).html($.shuffle(items)) 
        : this;
    });
  }
	
  $.shuffle = function(arr) {
    for(
      var j, x, i = arr.length; i; 
      j = parseInt(Math.random() * i), 
      x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  }	
})(jQuery);

$.fn.randomize = function(selector){
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function(){
        $(this).children(selector).sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });

    return this;
};
demoApp.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      scope.$emit('LastElem');
    }
  };
})
.directive('myMainDirective', function($timeout){
  return function(scope, element, attrs) {
    scope.$on('LastElem', function(event){
    	$timeout(function(){
    		//$("#blocks").shuffle();
    	});
    });
  };
});*/
