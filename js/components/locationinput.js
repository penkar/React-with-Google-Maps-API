var LocationInput = React.createClass({
	render: function(){
		return (
			<tr>
				<td><input id="cityid" /></td>
				<td><input id="lattid" /></td>
				<td><input id="longid" /></td>
			</tr>
		)
	}
})

module.exports = LocationInput