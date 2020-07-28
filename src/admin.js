import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import appStore from './store';

import Meeting from './meeting';
import Bookings from './bookings';
import Equipments from './equipments'
import Layout from './roomLayout'



import RoomAdd from './meeting/views/roomAdd'
import BookingAdd from './bookings/views/bookingAdd'
import EquipmentEdit from './equipments/views/equipmentEdit'

import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home(){
	return (<h1> Meeting Room app Login</h1>);
}


// import FoodDrinks from './foodDrinks';
// import AddFoodItem from './AddFoodItem';
// import FoodChange  from './foodDrinks/views/foodChange';




class Admin extends Component{
	
	render = () => {
		return(
			<>
				<div id="container">
					<div id="header">
						<div id="logo">
							<a href="/" target="_blank" rel="nofollow">Meeting Room Booking System</a>
						</div>
					</div>

					<div className="middle">
						<div id="leftmenu">
							<div className = "leftmenu-middle">
							<ul className="menu"   >
								<li>
									<Link to="/">Dashboard</Link>
								</li>
								
								<li>
									<Link to="/bookings/">Bookings</Link>
								</li>
								<li>
									<Link to="/rooms/">Rooms</Link>
								</li>
								<li>
									<Link to="/layouts/">Room Layouts</Link>
								</li>
								<li>
									<Link to="/equipments/">Equipment</Link>
								</li>
								<li>
									<Link to="/foodDrinks/">Food & Drinks</Link>
								</li>
								<li>
									<Link to="/users/">Users</Link>
								</li>
							</ul>
							</div>

						</div>


						{/* -- Page Content  -- */}
						<div id="right">        			
						{/* <Route path="/rooms/" exact component={Meeting}/>
							<Route path="/bookings/" exact component={Bookings}/>
							<Route path="/layouts/" exact component={Layout}/>
							<Route path="/equipments/" exact component={Equipments}/>

							<Route path="/addNewRoom/" exact component={RoomAdd}/>					
							<Route path="/addNewBooking/" exact component={BookingAdd}/>
							<Route path="/addNewEquipment/" exact component={EquipmentEdit}/> */}


	{/* 
							<Route path="/foodDrinks/" exact component={FoodDrinks}/>
							<Route path="/AddFoodItem/" exact component={AddFoodItem}/>
							<Route path="/foodChange/" exact component={FoodChange}/> */}

							{/* <Route path="/layouts" exact component={Layout} />
							<Route path="/" exact component={Home}/>
							<Route path="/bookings" exact component={Bookings}/>
							<Route path="/layouts" exact component={Layout}/>
							
							<Route path="/food-drinks" exact component={FoodDrink}/> */}
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Admin;




// ReactDOM.render(
// 	<Provider store={appStore}>
// 		<Router>
// 			<React.Fragment>



// 			<div id="container">
// 				<div id="header">
// 					<div id="logo">
// 						<a href="/" target="_blank" rel="nofollow">Meeting Room Booking System</a>
// 					</div>
// 				</div>

// 				<div className="middle">
//         			<div id="leftmenu">
// 						<div className = "leftmenu-middle">
//             			<ul className="menu"   >
// 							<li>
// 								<Link to="/">Dashboard</Link>
// 							</li>
							
// 							<li>
// 								<Link to="/bookings/">Bookings</Link>
// 							</li>
// 							<li>
// 								<Link to="/rooms/">Rooms</Link>
// 							</li>
// 							<li>
// 								<Link to="/layouts/">Room Layouts</Link>
// 							</li>
// 							<li>
// 								<Link to="/equipments/">Equipment</Link>
// 							</li>
// 							<li>
// 								<Link to="/food-drinks/">Food & Drinks</Link>
// 							</li>
// 							<li>
// 								<Link to="/users/">Users</Link>
// 							</li>
// 						</ul>
// 						</div>

//         			</div>


//         			{/* -- Page Content  -- */}
//         			<div id="right">        			
// 						<Route path="/rooms/" exact component={Meeting}/>
// 						<Route path="/bookings/" exact component={Bookings}/>
// 						<Route path="/layouts/" exact component={Layout}/>
// 						<Route path="/equipments/" exact component={Equipments}/>

// 						<Route path="/addNewRoom/" exact component={RoomAdd}/>					
// 						<Route path="/addNewBooking/" exact component={BookingAdd}/>
// 						<Route path="/addNewEquipment/" exact component={EquipmentEdit}/>


// {/* 
// 						<Route path="/foodDrinks/" exact component={FoodDrinks}/>
// 						<Route path="/AddFoodItem/" exact component={AddFoodItem}/>
// 						<Route path="/foodChange/" exact component={FoodChange}/> */}

// 						{/* <Route path="/layouts" exact component={Layout} />
// 						<Route path="/" exact component={Home}/>
// 						<Route path="/bookings" exact component={Bookings}/>
// 						<Route path="/layouts" exact component={Layout}/>
						
// 						<Route path="/food-drinks" exact component={FoodDrink}/> */}
// 					</div>
// 				</div>
// 			</div>
// 			</React.Fragment>
// 		</Router>
// 	</Provider>,
// 	document.getElementById('root'));



// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
