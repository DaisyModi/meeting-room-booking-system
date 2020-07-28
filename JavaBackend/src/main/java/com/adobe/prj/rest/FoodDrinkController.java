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

import com.adobe.prj.entity.FoodDrink;
import com.adobe.prj.service.BookingService;

/**
 * 
 * @author aargupta
 * @category controller Provides APIs to manage food drink items.
 *
 */
@RestController
public class FoodDrinkController {
  @Autowired
  BookingService bookingService;

  /**
   * 
   * {@link} http://localhost:8080/api/food_drinks?pageNumber={pagenumber} GET : get 3 equipments
   * for page number decided.
   * 
   * @return JSON list of all food_drink objects.
   * @param pageNumber
   *          integer to allow only certain number of object at one time. To enable paging. Present
   *          in Request Params
   */
  @RequestMapping(value = "food_drinks", method = RequestMethod.GET, params = "pageNumber")
  public @ResponseBody List<FoodDrink> getAllFoodDrinks(
      @RequestParam("pageNumber") int pageNumber) {
    System.out.println("GET: FoodDrinkController");
    return bookingService.getAllFoodDrinks(pageNumber);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/food_drinks?id={id} GET : get food_drink item with id = {id}.
   * 
   * @return JSON object of requested food_drink item.
   * @param id.
   *          Present in Request Params.
   */
  @RequestMapping(value = "food_drinks", method = RequestMethod.GET, params = "id")
  public @ResponseBody FoodDrink getFoodDrink(@RequestParam("id") int id) {
    System.out.println("GET: FoodDrinkController");
    return bookingService.getFoodDrink(id);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/food_drinks POST : add details for the given food_drink item
   * object.
   * 
   * @param <I>FoodDrink</I>
   *          object retrieved from JSON. Present in Request Body.
   * @return object created.
   */
  @RequestMapping(value = "food_drinks", method = RequestMethod.POST)
  public ResponseEntity<FoodDrink> addFoodDrink(@RequestBody FoodDrink f) {
    System.out.println("POST: FoodDrinkController");
    bookingService.addFoodDrink(f);
    return new ResponseEntity<FoodDrink>(f, HttpStatus.CREATED);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/food_drinks/{id} DELETE : delete food_drink item object for
   * the given id.
   * 
   * @param <I>ID</I>
   *          integer retrieved from JSON. Present in Path.
   * @return void.
   */
  @RequestMapping(value = "food_drinks/{id}", method = RequestMethod.DELETE)
  public void deleteFoodDrink(@PathVariable("id") int id) {
    System.out.println("DELETE: FoodDrink Controller");
    bookingService.deleteFoodDrink(id);
  }

  /**
   * 
   * {@link} http://localhost:8080/api/food_drinks PUT : edit details for the given food_drink
   * object.
   * 
   * @param <I>FoodDrink</I>
   *          object retrieved from JSON. Present in Request Body.
   * @return object updated.
   */
  @RequestMapping(value = "food_drinks", method = RequestMethod.PUT)
  public ResponseEntity<FoodDrink> editFoodDrink(@RequestBody FoodDrink f) {
    System.out.println("PUT:  FoodDrink Controller");
    bookingService.editFoodDrink(f);
    return new ResponseEntity<FoodDrink>(f, HttpStatus.OK);
  }

}
