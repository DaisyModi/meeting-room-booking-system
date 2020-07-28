import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Route, Link } from "react-router-dom";

//import { LayoutStats } from './views/layoutStats';
import { LayoutEdit } from './views/layoutEdit';
//import { BugSort } from './views/bugSort';
import { LayoutList } from './views/layoutList';

import * as layoutActionCreators from './actions';


class Layout extends Component{

	// automatically loads the data
	componentDidMount(){
		this.props.load();
	}
	
	render = () => {
		let { layouts, addNew, removeClosed, load } = this.props;

		return(
			<>
				<div>
					<span> 
						<Link to="/addNewLayout/"> 
							<button type="button">
								+ Add Room Layout
							</button>						 
						</Link>
					</span>
				</div>
				{/* <LayoutEdit addNew={addNew} /> */}
				<LayoutList {...{layouts, removeClosed}} />
				{/* <LayoutStats layouts = {layouts} /> */}
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




