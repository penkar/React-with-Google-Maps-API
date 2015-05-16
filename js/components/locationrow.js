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

module.exports = LocationRow