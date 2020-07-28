package com.adobe.prj.rest;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.adobe.prj.entity.Room;
import com.adobe.prj.service.BookingService;

/**
 * 
 * @author aargupta
 * @category controller 
 * Provides APIs to manage rooms.
 *
 */
@RestController
public class RoomController {
	@Autowired
	private BookingService bookingService;

  /**
   * 
   * {@link} http://localhost:8080/api/rooms?pageNumber={pagenumber}
   * GET : get 3 rooms for page number decided.
   * @return JSON list of all room objects.
   * @param pageNumber integer to allow only certain number of object at one time. To enable paging. Present in Request Params
   */
	@RequestMapping(value="rooms", method = RequestMethod.GET,params="pageNumber")
	public @ResponseBody List<Room> getRooms(@RequestParam("pageNumber") int pageNumber){
		System.out.println("GET:PageNumber Room Controller");
		List<Room> results = bookingService.getAllRooms(pageNumber);
		System.out.println(results);
		return results;
	}

  /**
  * 
  * {@link} http://localhost:8080/api/rooms
  * POST : add details for the given room object.
  * @param <I>Room</I> object retrieved from JSON. Present in Request Body.
  * @return object created.
  */
	@RequestMapping(value="rooms", method = RequestMethod.POST)
	public ResponseEntity<Room> addRoom(@RequestBody Room room){
		System.out.println("POST: Room Controller");
		System.out.println(room);
		bookingService.addRoom(room);
		return new ResponseEntity<Room>(room,HttpStatus.CREATED);
	}

  /**
   * 
   * {@link} http://localhost:8080/api/rooms?id={id}
   * GET : get room with id = {id}.
   * @return JSON object of requested room.
   * @param id. Present in Request Params.
   */
	@RequestMapping(value="rooms", method = RequestMethod.GET,params="id")
	public @ResponseBody Room getRoom(@RequestParam("id") int id){
	  System.out.println("GET: ID Room Controller");
		return bookingService.getRoom(id);
	}

  /**
   * 
   * {@link} http://localhost:8080/api/rooms/{id}
   * DELETE : delete room object for the given id.
   * @param <I>ID</I> integer retrieved from JSON. Present in Path.
   * @return void.
   */
	@RequestMapping(value="rooms/{id}", method = RequestMethod.DELETE)
	public void deleteRoom(@PathVariable("id") int id){
	  System.out.println("DELETE: Room Controller");
	  bookingService.deleteRoom(id);
	}

  /**
   * 
   * {@link} http://localhost:8080/api/rooms
   * PUT : edit room details for the given room object.
   * @param <I>Room</I> object retrieved from JSON. Present in Request Body.
   * @return object updated.
   */
	@RequestMapping(value = "rooms", method = RequestMethod.PUT)
  public ResponseEntity<Room> editRoom(@RequestBody Room r){
    System.out.println("PUT: Room Controller");
    bookingService.editRoom(r);
    return new ResponseEntity<Room>(r,HttpStatus.OK);
  }
	
}
