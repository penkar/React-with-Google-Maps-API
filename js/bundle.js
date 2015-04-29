// var creatMap = function(id) {
// 	var mapOptions = {
// 		zoom: 8,
// 		center: new google.maps.LatLng(-34.397, 150.644)
// 	};
// 	map = new google.maps.Map(id, mapOptions);
// }

var GoogleMap = React.createClass({
	displayName:'GoogleMap',
	getInitialState: function(){
		return ({title:'stuff'})
	},
	render: function(){
		return React.createElement('div', {className: 'maps'},
			React.createElement('div', {id:'mapA', className:'map'}),
			React.createElement('div', {id:'mapB', className:'map'})
		)
	},
	componentDidMount: function(){
		// var log;
		var mapOptions = {
			zoom: 8,
			center: new google.maps.LatLng(-34.397, 150.644)
		};
		new google.maps.Map(document.getElementById('mapA'), mapOptions);
		new google.maps.Map(document.getElementById('mapB'), mapOptions);
	}
})


function initialize() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644)
	};
	new google.maps.Map(document.getElementById('map'), mapOptions);

	React.render(
		React.createElement(GoogleMap, null),
		document.getElementById('map2')
	);
}

google.maps.event.addDomListener(window, 'load', initialize);