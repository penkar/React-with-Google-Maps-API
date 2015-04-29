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
]


var Nav = React.createClass({
	displayName: 'Nav',
	render: function(){
		return (
			React.createElement('input', {type:'button', value: 'click me', onClick:this.clicker})
		)
	},
	clicker: function(){
		this.props.click();
	}
})

var GoogleMap = React.createClass({
	displayName:'GoogleMap',
	getInitialState: function(){
		return ({currentLoc: locations[0]})
	},
	render: function(){
		return React.createElement('div', {className: 'maps'},
			React.createElement('div', {id:'mapA', className:'map'}),
			React.createElement(Nav, {click:this.click})
		)
	},
	componentDidMount: function(){
		this.setLoc();
	},
	componentDidUpdate: function(){
		this.setLoc();
	},
	setLoc: function(){
		var loc = this.state.currentLoc;
		var latlong = loc.location;
		var mapOptions = {
			zoom: loc.zoom,
			center: new google.maps.LatLng(latlong.latt, latlong.long)
		};
		new google.maps.Map(document.getElementById('mapA'), mapOptions);
	},
	click:function(){
		var id = this.state.currentLoc.id;
		id = (id + 1) % locations.length;
		this.setState({currentLoc: locations[id]})
	}
})


function initialize() {
	document.aaa = React.render(
		React.createElement(GoogleMap, null),
		document.getElementById('map')
	);
}

google.maps.event.addDomListener(window, 'load', initialize);