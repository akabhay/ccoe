//This handles retrieving data and is used by controllers. 

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
			{name:'Sample 3', id:'3', url:'page3'}

		]},
		{name:'Level 3', id:'3', pages:[]}
	];

});
