import React, { Component } from 'react';
import { FoodItemForUsers } from './foodItem';
import * as bookingActionCreators from '../../bookings/actions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserDetails extends Component{

    state={roomName : "", start_date : null, end_date : null, subTotal : 0, status : null, attendees : 0, paymentMethod : null, 
                layoutName : "", client : {},
        title:"",name:"",email:"",phone:"",notes:"",company:"",address:"",city:"",state:"",zip:"",country:"",foodList:[],equipList:[]}

    saveBooking = () => {
        console.log("booking done!");
		 this.props.addBooking(this.state.roomName, this.state.start_date, this.state.end_date, this.state.subTotal, this.state.status,
             this.state.attendees, this.state.paymentMethod, this.state.layoutName, this.state.client,this.state.title,this.state.email,
             this.state.name,this.state.phone,this.state.notes,this.state.company,this.state.address,this.state.city,this.state.state,
             this.state.zip,this.state.country,this.state.foodList,this.state.equipList);
		window.location.replace("http://localhost:3000/");
    }
    
    setBookingState = (booking_details) => {
        this.state.roomName = booking_details.title;
        this.state.startDate = booking_details.startDate;
        this.state.end_date = booking_details.end_date;
        this.state.foodList=booking_details.foodList;
        this.state.equipList=booking_details.equipList;
        //this.state.subTotal = 
        //this.state.status = 
        this.state.attendees = booking_details.attendees;
        //this.state.paymentMethod = ;
        //this.state.layoutName = this.booking_details.layout;
    }
    onCheckChange=(evt)=>{
        var btn=document.getElementById("next");
        btn.disabled=!btn.disabled;
    }
	render = () => {
        let { booking_details } = this.props.location.state;
        console.log("%%%", booking_details);
        this.setBookingState(booking_details);

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
                <input type="button"  value="Confirm" id="next" onClick={this.saveBooking } disabled={"disabled"} />
			</>
		)
	}
}


function mapDispatchToProps(dispatch){
	var bookingActionDispatchers = bindActionCreators(bookingActionCreators, dispatch);
	return bookingActionDispatchers;
}

export default connect(
	null,
	mapDispatchToProps
)(UserDetails);