var Nav = require('./components/nav.js')
var GoogleMap = require('./components/googlemap.js')
var LocationStore = require('./store/locationstore.js');

var Body = React.createClass({
	getInitialState: function(){
		return ({
			currentLoc: LocationStore.getCurrentLoc()
		})
	},
	componentDidMount: function() {
		LocationStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		LocationStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState({
			currentLoc: LocationStore.getCurrentLoc()
		});
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
		LocationStore.setNext();
	}
});

function initialize() {
	React.render(
		<Body />,
		document.getElementById('map')
	);
};

google.maps.event.addDomListener(window, 'load', initialize);