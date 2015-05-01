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
var Body = React.createClass({
	displayName:'Body',
	render: function(){
		return React.createElement('div',null,
			React.createElement(GoogleMap, null),
			React.createElement(Nav, {click:this.click})
		)
	},
	click:function(){
		var id = this.state.currentLoc.id;
		id = (id + 1) % locations.length;
		this.setState({currentLoc: locations[id]})
	}
})

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
			React.createElement('div', {id:'mapA', className:'map'})
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
	}
})


function initialize() {
	document.aaa = React.render(
		React.createElement(Body, null),
		document.getElementById('map')
	);
}

google.maps.event.addDomListener(window, 'load', initialize);