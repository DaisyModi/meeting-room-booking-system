import React, { Component } from 'react';

export class LayoutItem extends Component{
	render = () => {
		let { layout /*toggle, selection*/ } = this.props;
		return(
            <li>
                 {/* {
			// 		layout.status ? 
			// 		(
			// 			<span className="active" onClick={() => toggle(layout) }>
			// 				{layout.name}
			// 			</span>
			// 		) : 
			// 		(	<span className="inactive" onClick={() => toggle(layout) }>
			// 				{layout.name}
			// 			</span>
			// 		)
			// 	} */}
	
				<div>{layout.title}</div>
		
			</li>
		)
	}
}