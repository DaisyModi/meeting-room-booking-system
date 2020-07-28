package com.adobe.prj.rest;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.prj.entity.Room;
import com.adobe.prj.entity.User;
import com.adobe.prj.service.BookingService;

/**
 * 
 * @author aargupta
 * @category controller 
 * Provides APIs to manage equipments.
 *
 */
@RestController
public class UserController {

  @Autowired
  private BookingService bookingService;

  /**
   * 
   * {@link} http://localhost:8080/api/equipments?pageNumber={pagenumber}
   * GET : get 3 equipments for page number decided.
   * @return JSON list of all equipment objects.
   * @param pageNumber integer to allow only certain number of object at one time. To enable paging. Present in Request Params
   */
  @RequestMapping(value = "users", method = RequestMethod.GET)
  public @ResponseBody List<User> getAllUsers() {
    System.out.println("GET: PageNumber User Controller");
    List<User> results = bookingService.getAllUsers();
    System.out.println(results);
    return results;
  }

  /**
  * 
  * {@link} http://localhost:8080/api/equipments
  * POST : add equipment details for the given equipment object.
  * @param <I>Equipment</I> object retrieved from JSON. Present in Request Body.
  * @return object created.
  */
  @RequestMapping(value = "users", method = RequestMethod.POST)
  public ResponseEntity<User> addUser(@RequestBody @Valid User user, BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
      System.out.println(bindingResult);
      return new ResponseEntity<>(HttpStatus.UNSUPPORTED_MEDIA_TYPE);
    }
    System.out.println("POST: User Controller");
    System.out.println(user);
    bookingService.addUser(user);
    return new ResponseEntity<User>(user, HttpStatus.CREATED);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/equipments?id={id}
   * GET : get equipment with id = {id}.
   * @return JSON object of requested equipment.
   * @param id. Present in Request Params.
   */
  @RequestMapping(value = "users/{id}", method = RequestMethod.GET)
  public @ResponseBody User getUser(@PathVariable("id") String id) {
    System.out.println("GET: ID USER Controller");
    return bookingService.getUser(id);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/equipments/{id}
   * DELETE : delete equipment object for the given id.
   * @param <I>ID</I> integer retrieved from JSON. Present in Path.
   * @return void.
   */
  @RequestMapping(value = "users/{id}", method = RequestMethod.DELETE)
  public void deleteUser(@PathVariable("id") String id) {
    System.out.println("DELETE: ID USER Controller");
    bookingService.deleteUser(id);
  }
  

  /**
   * 
   * {@link} http://localhost:8080/api/equipments
   * PUT : edit equipment details for the given equipment object.
   * @param <I>Equipment</I> object retrieved from JSON. Present in Request Body.
   * @return object updated.
   */
  @RequestMapping(value = "users/{id}", method = RequestMethod.PUT)
  public ResponseEntity<User> editRoom(@RequestBody User user){
    System.out.println("PUT: USER Controller");
    bookingService.editUser(user);
    return new ResponseEntity<User>(user,HttpStatus.OK);
  }
}
