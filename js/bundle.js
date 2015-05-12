/** @jsx React.DOM */
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
var Body = React.createClass({
	getInitialState: function(){
		return ({currentLoc: locations[0]})
	},
	render: function(){
		return (
			<div>
				<GoogleMap currentLoc={this.state.currentLoc}/>
				<Nav click={this.click} />
			</div>
		)
	},
	click:function(){
		console.log('this');
		var id = this.state.currentLoc.id;
		id = (id + 1) % locations.length;
		this.setState({currentLoc: locations[id]})
	}
});

var Nav = React.createClass({
	displayName: 'Nav',
	render: function(){
		return (
			<input type='button' value='click me' onClick={this.clicker} />
		)
	},
	clicker: function(){
		this.props.click();
	}
});

var GoogleMap = React.createClass({
	render: function(){
		return (
			<div className='maps'>
				<div id='mapA' className='map' />
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

function initialize() {
	React.render(
		<Body />,
		document.getElementById('map')
	);
};

google.maps.event.addDomListener(window, 'load', initialize);
