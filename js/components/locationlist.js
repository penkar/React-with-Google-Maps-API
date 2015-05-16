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
			arr.push(<LocationRow data={locations[i]} ref={locations[i].id} />)
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

module.exports = LocationList