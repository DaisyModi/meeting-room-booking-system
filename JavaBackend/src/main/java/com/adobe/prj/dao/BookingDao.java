package com.adobe.prj.dao;
 
import java.util.List;
 
import com.adobe.prj.entity.Booking;
 
public interface BookingDao {
       boolean addBooking(Booking booking);
      
       List<Booking> getAllBookings();
      
       Booking getBooking(int id);

      void deleteBooking(int id);

      Booking editBooking(Booking booking);
}
 