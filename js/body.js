var locations = [
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
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var ChartStore = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	add: function(){
		_charts.charts.push(_charts.next);
		_charts.next += 1;
		this.emitChange();
	}
})


var Body = React.createClass({
	getInitialState: function(){
		return ({currentLoc: locations[0]})
	},
	render: function(){
		return (
			<div id="wrapper">
				<Nav click={this.click}/>
				<GoogleMap currentLoc={this.state.currentLoc}/>
			</div>
		)
	},
	click:function(){
		var id = this.state.currentLoc.id;
		id = (id + 1) % locations.length;
		this.setState({currentLoc: locations[id]})
	}
});

var Nav = React.createClass({
	render: function(){
		return (
			<div className='navbar'>
			<input className="pure-button" type='button' value='click me' onClick={this.clicker} />
			</div>
		)
	},
	clicker: function(){
		this.props.click();
	}
});

var GoogleMap = React.createClass({
	render: function(){
		return (
			<div>
				<div className='maps'>
				<div id='mapA' className='map' text-align="right"/>
				</div>
				<LocationList />
			</div>
		)
	},
	componentDidMount: function(){
		this.setLoc();
	},
	componentDidUpdate: function(){
		this.setLoc();
	},
	setLoc: function(){
		var loc = this.props.currentLoc;
		var latlong = loc.location;
		var mapOptions = {
			zoom: loc.zoom,
			center: new google.maps.LatLng(latlong.latt, latlong.long)
		};
		new google.maps.Map(document.getElementById('mapA'), mapOptions);
	}
});

var LocationRow = React.createClass({
	render: function(){
		var loc = this.props.data;
		return (
			<tr>
				<td>{loc.name}</td>
				<td>{loc.location.latt}</td>
				<td>{loc.location.latt}</td>
			</tr>
		)
	}
});

var LocationInput = React.createClass({
	render: function(){
		return (
			<tr>
				<td><input /></td>
				<td><input /></td>
				<td><input /></td>
			</tr>
		)
	}
})

var LocationList = React.createClass({
	render: function(){
		var arr = [];
		for(var i = 0, iLen = locations.length; i < iLen; i++){	
			arr.push(<LocationRow data={locations[i]} />)
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
				{arr}
				<LocationInput />
			</table>
			<input type='button' value='Add New Location' id="add"/>
			</div>
		)
	}
})

function initialize() {
	React.render(
		<Body />,
		document.getElementById('map')
	);
};

google.maps.event.addDomListener(window, 'load', initialize);