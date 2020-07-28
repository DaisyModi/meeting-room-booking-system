import React, { Component } from 'react';
import { FoodItemForUsers } from './foodItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Screen5 extends Component{
    state={title:"",name:"",email:"",phone:"",notes:"",company:"",address:"",city:"",state:"",zip:"",country:""}
    onCheckChange=(evt)=>{
        var btn=document.getElementById("next");
        btn.disabled=!btn.disabled;
    }
	render = () => {
		return(
			<>
            <div>
            <div><h3>PERSONAL DETAILS</h3></div>
			<label>Title:</label>
            <input type="text" onChange={(evt)=>{this.setState({title:evt.target.value})}}/>
            <label>Name:</label>
            <input type="text" onChange={(evt)=>{this.setState({name:evt.target.value})}}/>
            <label>Email:</label>
            <input type="text" onChange={(evt)=>{this.setState({email:evt.target.value})}}/>
            <label>Phone:</label>
            <input type="text" onChange={(evt)=>{this.setState({phone:evt.target.value})}}/>
            <label>Notes:</label>
            <input type="text" onChange={(evt)=>{this.setState({notes:evt.target.value})}}/>
            </div>
            <div>
                <div><h3>BILLING ADDRESS</h3></div>
                <label>Company:</label>
                <input type="text" onChange={(evt)=>{this.setState({company:evt.target.value})}}/>
                <label>Address:</label>
                <input type="text" onChange={(evt)=>{this.setState({address:evt.target.value})}}/>
                <label>City:</label>
                <input type="text" onChange={(evt)=>{this.setState({city:evt.target.value})}}/>
                <label>State:</label>
                <input type="text" onChange={(evt)=>{this.setState({state:evt.target.value})}}/>
                <label>Zip:</label>
                <input type="text" onChange={(evt)=>{this.setState({zip:evt.target.value})}}/>
                <label>Country:</label>
                <input type="text" onChange={(evt)=>{this.setState({country:evt.target.value})}}/>
            </div>
            <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Payment method
  </button>
  <ul class="dropdown-menu">
    <li>Cash</li>
  </ul>
</div>
            <div>
                <div>Terms and Conditions</div>
                <input id="Confirmation" type="checkbox" onChange={this.onCheckChange}/>
                <span class="red">I agree with the terms of reservation</span>
            </div>
			<input  type="button" value="back" />
			<Link to=""><input type="button" value="next" id="next" disabled={"disabled"}/></Link>
			</>
		)
	}
}