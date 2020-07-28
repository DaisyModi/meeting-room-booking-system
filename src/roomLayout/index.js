import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { LayoutStats } from './views/layoutStats';
import { LayoutEdit } from './views/layoutEdit';
//import { BugSort } from './views/bugSort';
import { LayoutList } from './views/layoutList';

import * as layoutActionCreators from './actions';


class Layout extends Component{


	componentDidMount(){
		this.props.loadLayout();	
	}
	
	render = () => {
		let { layouts, addNew, removeClosed, loadLayout } = this.props;
		
		return(
			<>
				{/* <input type="button" value="Load Data" onClick={loadLayout}/> */}
				<LayoutEdit addNew={addNew} />
				<LayoutList {...{layouts, removeClosed}} />
				{/* <LayoutStats layouts = {layouts}/> */}
			</>
		)
	}
}

function mapDispatchToProps(dispatch){
	var layoutActionDispatchers = bindActionCreators(layoutActionCreators, dispatch);
	return layoutActionDispatchers;
}

function mapStateToProps({layoutData}){
	let layouts = layoutData
	return { layouts : layouts }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);




