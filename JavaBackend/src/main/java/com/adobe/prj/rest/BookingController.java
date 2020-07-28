package com.adobe.prj.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.prj.entity.Booking;
import com.adobe.prj.entity.Room;
import com.adobe.prj.service.BookingService;

/**
 * 
 * @author aargupta
 * @category controller 
 * Provides APIs to manage bookings.
 *
 */

@RestController
public class BookingController {
  @Autowired
  BookingService bookingService;
  
  /**
   * 
   * {@link} http://localhost:8080/api/bookings
   * GET : get all bookings.
   * @return JSON list of all booking objects.
   */
  @RequestMapping(value = "bookings", method = RequestMethod.GET)
  public @ResponseBody List<Booking> getAllBookings() {
    System.out.println("GET: pageNumber BookingController");
    List<Booking> results = bookingService.getAllBookings();
    return results;
  }
  
  /**
   * 
   * {@link} http://localhost:8080/api/bookings/{id}
   * GET : get booking with id = {id}.
   * @return JSON object of requested booking.
   */
  @RequestMapping(value = "bookings/{id}", method = RequestMethod.GET)
  public @ResponseBody Booking getBooking(@PathVariable("id") int id) {
    System.out.println("GET: BookingController");
    return bookingService.getBooking(id);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/bookings
   * POST : add booking details for the given booking object.
   * @param <I>Booking</I> object retrieved from JSON. Present in Request Body.
   * @return object created.
   */
  @RequestMapping(value = "bookings", method = RequestMethod.POST)
  public ResponseEntity<Booking> addBooking(@RequestBody Booking booking) {
    System.out.println("POST: BookingController");
    boolean result = bookingService.addBooking(booking);
    if (result) {
      return new ResponseEntity<Booking>(booking, HttpStatus.CREATED);
    }
    return new ResponseEntity<>(HttpStatus.CONFLICT);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/bookings
   * PUT : edit booking details for the given booking object.
   * @param <I>Booking</I> object retrieved from JSON. Present in Request Body.
   * @return object updated.
   */
  @RequestMapping(value = "bookings", method = RequestMethod.PUT)
  public ResponseEntity<Booking> editBooking(@RequestBody Booking booking) {
    System.out.println("PUT: BookingController");
    booking = bookingService.editBooking(booking);
    return new ResponseEntity<Booking>(booking, HttpStatus.OK);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/bookings/{id}
   * DELETE : delete booking object for the given id.
   * @param <I>ID</I> integer retrieved from JSON. Present in Path.
   * @return void.
   */
  @RequestMapping(value = "bookings/{id}", method = RequestMethod.DELETE)
  public void deleteBooking(@PathVariable("id") int id) {
    System.out.println("DELETE: BookingController");
    bookingService.deleteBooking(id);
  }
}
