import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as layoutActionCreators from '../actions';

class LayoutEdit extends Component{
	state = { newLayoutTitle : ''};

	saveDetails = () => {
		this.props.addNew(this.state.newLayoutTitle);
		window.location.replace("http://localhost:3000/");
	}

	render = () => {
		let { addNew } = this.props,
			{ newLayoutTitle } = this.state;
		return(
			<section>
				<label htmlFor="">Layout Title :</label>
				<input type="text" onChange = { evt => this.setState({newLayoutTitle : evt.target.value})} />
				<br/>
				<input type="button" value="Save Layout Data" onClick={ this.saveDetails } />
			</section>
		)
	}
}


function mapDispatchToProps(dispatch){
	var layoutActionDispatchers = bindActionCreators(layoutActionCreators, dispatch);
	return layoutActionDispatchers;
}

export default connect(
	null,
	mapDispatchToProps
)(LayoutEdit);