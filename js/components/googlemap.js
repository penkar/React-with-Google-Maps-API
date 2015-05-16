var LocationList = require('./locationlist.js')

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

module.exports = GoogleMap