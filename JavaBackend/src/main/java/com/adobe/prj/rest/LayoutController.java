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

import com.adobe.prj.entity.Layout;
import com.adobe.prj.service.BookingService;

/**
 * 
 * @author aargupta
 * @category controller Provides APIs to manage layouts.
 *
 */
@RestController
public class LayoutController {
  @Autowired
  private BookingService bookingService;

  /**
   * 
   * {@link} http://localhost:8080/api/layouts?pageNumber={pagenumber} GET : get 3 layouts for page
   * number decided.
   * 
   * @return JSON list of all layout objects.
   * @param pageNumber
   *          integer to allow only certain number of object at one time. To enable paging. Present
   *          in Request Params
   */
  @RequestMapping(value = "layouts", method = RequestMethod.GET, params = "pageNumber")
  public @ResponseBody List<Layout> getLayouts(@RequestParam("pageNumber") int pageNumber) {
    System.out.println("GET: Layout Controller");
    List<Layout> results = bookingService.getAllLayouts(pageNumber);
    System.out.println(results);
    return results;
  }

  /**
   * 
   * {@link} http://localhost:8080/api/layouts POST : add details for the given layout object.
   * 
   * @param <I>Layout</I>
   *          object retrieved from JSON. Present in Request Body.
   * @return object created.
   */
  @RequestMapping(value = "layouts", method = RequestMethod.POST)
  public ResponseEntity<Layout> addLayout(@RequestBody Layout layout) {
    System.out.println("POST: Layout Controller");
    System.out.println(layout);
    bookingService.addLayout(layout);
    return new ResponseEntity<Layout>(layout, HttpStatus.CREATED);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/layouts?id={id} GET : get layout with id = {id}.
   * 
   * @return JSON object of requested equipment.
   * @param id.
   *          Present in Request Params.
   */
  @RequestMapping(value = "layouts", method = RequestMethod.GET, params = "id")
  public @ResponseBody Layout getLayout(@RequestParam("id") int id) {
    return bookingService.getLayout(id);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/layouts/{id} DELETE : delete layout object for the given id.
   * 
   * @param <I>ID</I>
   *          integer retrieved from JSON. Present in Path.
   * @return void.
   */
  @RequestMapping(value = "layouts/{id}", method = RequestMethod.DELETE)
  public void deleteLayout(@PathVariable("id") int id) {
    System.out.println("DELETE: Equipment Controller");
    bookingService.deleteLayout(id);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/layouts PUT : edit details for the given layout object.
   * 
   * @param <I>Layout</I>
   *          object retrieved from JSON. Present in Request Body.
   * @return object updated.
   */
  @RequestMapping(value = "layouts", method = RequestMethod.PUT)
  public ResponseEntity<Layout> editLayout(@RequestBody Layout l) {
    System.out.println("PUT:  Equipment Controller");
    bookingService.editLayout(l);
    return new ResponseEntity<Layout>(l, HttpStatus.OK);
  }
}
