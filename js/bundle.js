var creatMap = function(id) {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644)
	};
	map = new google.maps.Map(id, mapOptions);
}

var GoogleMap = React.createClass({
	displayName:'GoogleMap',
	render: function(){
		return React.createElement('div', {className: 'maps'},
			React.createElement('div', {id:'map2'}),
			React.createElement('div', {id:'map3'})
		)
	},
	componentDidMount: function(){
		// var log;
		var mapOptions = {
			zoom: 8,
			center: new google.maps.LatLng(-34.397, 150.644)
		};
		new google.maps.Map(document.getElementById('map2'), mapOptions);
		// new google.maps.Map(document.getElementById('map3'), mapOptions);
	}
})

React.render(
	React.createElement(GoogleMap, null),
	document.getElementById('map2')
);

function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  new google.maps.Map(document.getElementById('map'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);