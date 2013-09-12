//This handles retrieving data and is used by controllers. 

demoApp.service('demoService', function () {

	this.getLevelsAndPages = function () {
        return _levels;
    };

	this.getMatchQuiz = function ($scope) {
        return _matchquiz;
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
		{name:'Level 3', id:'3', pages:[]}
	];

	/*var _matchquiz = [
		{question:'Functions as an air passage to fill the ink tank.', answer:'Sub-buffer'},
		{question:'A PCB that controls printer as a whole.', answer:'Main Controller'},
		{question:'Connects the carriage and the main controller with each other by a flat cable.', answer:'Carriage Relay PCB'},
		{question:'A film on which slits are printed to generate an encoder pulse signal.', answer:'Carriage Encoder'},
		{question:'Relays the head signals and performs pre-processing on the multi sensor signals.', answer:'Head Relay PCB'},
		{question:'A head recovering unit that sucks the head to restore the clogged nozzles.', answer:'Purge Unit'},
	];*/
});

