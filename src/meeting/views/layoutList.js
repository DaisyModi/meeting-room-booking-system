import React, { Component } from 'react';

export class LayoutListItem extends Component{
	state = {  updatedLayout:{id:'', title:'',  isSelected:false}}

	componentDidMount(){

		let {layout} = this.props;
		let newStatus = this.state.updatedLayout.isSelected;
		console.log("component mounted");
		this.setState(prevState => ({
			updatedLayout: {                   
				...prevState.updatedLayout,  
				id:layout.id,
				title:layout.title,
				isSelected:newStatus       
			}
		}));
	}

	handleChange = (event) => {
		let newStatus = !this.state.updatedLayout.isSelected;
		console.log("status",newStatus);


		console.log("layout ", this.props.layout);
		this.setState(prevState => ({
			updatedLayout: {                   
				...prevState.updatedLayout,  
				id:this.props.layout.id,
				title: this.props.layout.title,
				isSelected:newStatus       
			}
		}));

		console.log("updatedLayout -1", this.state.updatedLayout);
		this.props.onLayoutSelection(this.props.index, this.state.updatedLayout);
	}


	render = () => {
		let {layout} = this.props;
	
		return(
			<tr>		
				<td>{layout.title}</td>
				<td>
					<input type="checkbox" onChange = {this.handleChange } defaultChecked={ this.state.updatedLayout.isSelected} />
				</td>				

			</tr>
		)
	}
}