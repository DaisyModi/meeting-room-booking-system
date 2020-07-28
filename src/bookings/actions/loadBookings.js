import { getAll } from '../services/bookingApi';

export function loadBookings(){
    return function(dispatch){
        getAll().then(bookings=>{
            let action = { type : 'LOAD_BOOKINGS', payload : bookings};
            dispatch(action);
        });
    }
}
