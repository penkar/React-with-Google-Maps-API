var Nav = React.createClass({
	render: function(){
		return (
			<div className='navbar'>
			<input className="pure-button" type='button' value='Next Location' onClick={this.clicker} />
			</div>
		)
	},
	clicker: function(){
		this.props.click();
	}
});

module.exports = Nav