var LocationRow = require('./locationrow.js');
var LocationInput = require('./locationinput.js');
var LocationStore = require('../store/locationstore.js');

var LocationList = React.createClass({
	_click: function(){
		LocationStore.add();
	},
	componentDidMount: function() {
		LocationStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		LocationStore.removeChangeListener(this._onChange);
	},
	getInitialState: function(){
		return {
			current: 0,
			locations: LocationStore.getAll()
		}
	},
	_onChange: function(){
		this.setState({
			current: LocationStore.getCurrent(),
			locations: LocationStore.getAll()
		})
	},
	render: function(){
		var arr = [];
		for(var i = 0, iLen = this.state.locations.length; i < iLen; i++){	
			var loc = this.state.locations[i]
			arr.push(<LocationRow data={loc} ref={loc.id} cur={this.state.current} />)
		}
		return (
			<div>
			<table className="pure-table">
				<thead>
				<tr>
					<th>City</th>
					<th>Lattitude</th>
					<th>Longitude</th>
				</tr>
				</thead>
					<LocationInput />
					{arr}
				</table>
			<input type='button' value='Add New Location' id="add" onClick={this._click} />
			</div>
		)
	}
})

module.exports = LocationList