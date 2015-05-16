var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _locations = [
	{
		id: 0,
		name: 'Houston',
		location: {
			latt: 29.76, 
			long: -95.38
		}, 
		zoom: 8
	},
	{
		id: 1,
		name: 'Austin',
		location: {
			latt: 30.28, 
			long: -97.76
		}, 
		zoom: 8
	}
];
var _numeric = {count: 2, current: 0};
var CHANGE_EVENT = 'change';


var LocationStore = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getAll: function(){
		return _locations;
	},
	getCurrent: function(){
		return _numeric.current;
	},
	getCurrentLoc: function(){
		return _locations[_numeric.current];
	},
	setNext: function(){
		_numeric.current = (_numeric.current +1) %  _locations.length
		this.emitChange()
	},
	add: function(){
		_locations.push({
			id: _numeric,
			name: document.getElementById('cityid').value,
			location: {
				latt: document.getElementById('lattid').value,
				long: document.getElementById('longid').value
			}
		});
		_numeric.current = _numeric.count;
		_numeric.count += 1;
		this.emitChange()
	}
})

module.exports = LocationStore;