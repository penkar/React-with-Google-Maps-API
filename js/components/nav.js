var LocationStore = require('../store/locationstore.js');

var Nav = React.createClass({
	render: function(){
		return (
			<div className='navbar'>
			<input className="pure-button" type='button' value='Next Location' onClick={this.clicker} />
			<input className="pure-button" type='button' value='Add New' id="add" onClick={this._click} />
			</div>
		)
	},
	clicker: function(){
		this.props.click();
	},
	_click: function(){
		LocationStore.add();
	},
});

module.exports = Nav