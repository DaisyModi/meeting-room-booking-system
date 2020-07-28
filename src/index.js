import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import appStore from './store';

import User from './userScreen/';
// import Admin from './admin-page';


import BookingByUser from './userScreen/views/booking';
import RoomSetupByUser from './userScreen/views/roomSetup';
import FoodListForUser from './userScreen/views/foodList';
import UserDetails from './userScreen/views/userDetails';

import Meeting from './meeting';
import Bookings from './bookings';
import Equipments from './equipments'
import Layout from './roomLayout'



import RoomAdd from './meeting/views/roomAdd'
import BookingAdd from './bookings/views/bookingAdd'
import EquipmentEdit from './equipments/views/equipmentEdit'

import FoodDrinks from './foodDrinks';
import AddFoodItem from './AddFoodItem';
import  FoodChange  from './foodDrinks/views/foodChange';



import Admin from './admin'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home(){
	return (<h1> Meeting Room app Login</h1>);
}

ReactDOM.render(
	<Provider store={appStore}>
		<Router>
			<React.Fragment>
				<div className="wrapper">
                    <div>
                        <span> 
                            <Link to="/user-page/"> 
                                <button type="button">
                                    User Screen
                                </button>						 
                            </Link>
                        </span>


						<span> 
                            <Link to="/admin-page/"> 
                                <button type="button">
                                    Admin Screen
                                </button>						 
                            </Link>
                        </span>

                        {/* <span> 
                            <Link to="/admin-page/"> 
                                <button type="button">
                                    Admin Screen
                                </button>						 
                            </Link>
                        </span> */}

                    </div>

        			{/* -- Page Content  -- */}
        			<div id="content">        			
						<Route path="/user-page/" exact component={User}/>
						<Route path="/admin-page/" exact component={Admin}/>
                        {/* <Route path="/admin-page/" exact component={Admin}/>		 */}
                        <Route path="/user-booking-room/" exact component={BookingByUser}/>
                        <Route path="/room-setup-by-user/" exact component={RoomSetupByUser}/>
                        <Route path="/food-list-by-user/" exact component={FoodListForUser}/>
                        <Route path="/user-details/" exact component={UserDetails}/>
						<Route path="/rooms/" exact component={Meeting}/>
						<Route path="/bookings/" exact component={Bookings}/>
						<Route path="/layouts/" exact component={Layout}/>
						<Route path="/equipments/" exact component={Equipments}/>

						<Route path="/addNewRoom/" exact component={RoomAdd}/>					
						<Route path="/addNewBooking/" exact component={BookingAdd}/>
						<Route path="/addNewEquipment/" exact component={EquipmentEdit}/>

                        <Route path="/foodDrinks/" exact component={FoodDrinks}/>
                        <Route path="/AddFoodItem/" exact component={AddFoodItem}/>
                        <Route path="/foodChange/" exact component={FoodChange}/>


					</div>
				</div>
			</React.Fragment>
		</Router>
	</Provider>,
	document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();