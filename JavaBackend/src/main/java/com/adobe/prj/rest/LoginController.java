package com.adobe.prj.rest;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adobe.prj.entity.Login;
import com.adobe.prj.entity.User;
import com.adobe.prj.service.BookingService;

/**
 * 
 * @author aargupta
 * @category controller 
 * Provides APIs to manage login sessions.
 *
 */
@Controller
public class LoginController {
  @Autowired
  BookingService service;

  /**
   * 
   * {@link} http://localhost:8080/api/login
   * GET : get all login sessions.
   * @return JSON list of all login objects.
   */
  @RequestMapping(value = "login", method = RequestMethod.GET)
  public @ResponseBody List<Login> getAllLogins() {
    System.out.println("GET: Login Controller");
    List<Login> results = service.getAllLogins();
    System.out.println(results);
    return results;
  }

  /**
  * 
  * {@link} http://localhost:8080/api/login
  * POST : add details for the given login object.
  * @param <I>Login</I> object retrieved from JSON. Present in Request Body.
  * @return object created.
  */
  @RequestMapping(value = "login", method = RequestMethod.POST)
  public ResponseEntity<User> login(@RequestBody @Valid Login login, BindingResult bindingResult ) {
    System.out.println("POST: Login Controller");
    if (bindingResult.hasErrors()) {
      System.out.println(bindingResult);
      return new ResponseEntity<>(HttpStatus.UNSUPPORTED_MEDIA_TYPE);
    }
    User user = service.validateUser(login);
    if (user != null) {
      return new ResponseEntity<User>(user, HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
  }

}
