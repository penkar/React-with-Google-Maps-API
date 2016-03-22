var LocationRow = React.createClass({
	render: function(){
		var loc = this.props.data;
		var style;
		if(loc.id === this.props.cur){
			style = 'currentLoc';
		}
		return (
			<tr className={style}>
				<td>{loc.name}</td>
				<td>{loc.location.latt}</td>
				<td>{loc.location.latt}</td>
			</tr>
		)
	}
});

module.exports = LocationRow
