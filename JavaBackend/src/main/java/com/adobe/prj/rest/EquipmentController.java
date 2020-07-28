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

import com.adobe.prj.entity.Equipment;
import com.adobe.prj.service.BookingService;

/**
 * 
 * @author aargupta
 * @category controller 
 * Provides APIs to manage equipments.
 *
 */

@RestController
public class EquipmentController {
	@Autowired
	BookingService bookingService;
	
	/**
   * 
   * {@link} http://localhost:8080/api/equipments?pageNumber={pagenumber}
   * GET : get 3 equipments for page number decided.
   * @return JSON list of all equipment objects.
   * @param pageNumber integer to allow only certain number of object at one time. To enable paging. Present in Request Params
   */
	@RequestMapping(value = "equipments" , method=RequestMethod.GET,params="pageNumber")
	public @ResponseBody List<Equipment> getAllEquipments(@RequestParam("pageNumber") int pageNumber){
	  System.out.println("GET: PageNumber Equipment Controller");
		return bookingService.getAllEquipments(pageNumber);
	}
	
	/**
   * 
   * {@link} http://localhost:8080/api/equipments?id={id}
   * GET : get equipment with id = {id}.
   * @return JSON object of requested equipment.
   * @param id. Present in Request Params.
   */
	@RequestMapping(value="equipments", method = RequestMethod.GET,params="id")
	public @ResponseBody Equipment getEquipment(@RequestParam("id") int id){
	  System.out.println("GET: ID Equipment Controller");
		return bookingService.getEquipment(id);
	}
	
	 /**
   * 
   * {@link} http://localhost:8080/api/equipments
   * POST : add equipment details for the given equipment object.
   * @param <I>Equipment</I> object retrieved from JSON. Present in Request Body.
   * @return object created.
   */
	@RequestMapping(value="equipments", method = RequestMethod.POST)
	public ResponseEntity<Equipment> addEquipment(@RequestBody Equipment equipment){
		bookingService.addEquipment(equipment);
		return new ResponseEntity<Equipment>(equipment, HttpStatus.CREATED);
	}
	
	/**
   * 
   * {@link} http://localhost:8080/api/equipments/{id}
   * DELETE : delete equipment object for the given id.
   * @param <I>ID</I> integer retrieved from JSON. Present in Path.
   * @return void.
   */
	@RequestMapping(value="equipments/{id}", method = RequestMethod.DELETE)
  public void deleteEquipment(@PathVariable("id") int id){
    System.out.println("DELETE: Equipment Controller");
    bookingService.deleteEquipment(id);
  }
	
	/**
   * 
   * {@link} http://localhost:8080/api/equipments
   * PUT : edit equipment details for the given equipment object.
   * @param <I>Equipment</I> object retrieved from JSON. Present in Request Body.
   * @return object updated.
   */
	@RequestMapping(value = "equipments", method = RequestMethod.PUT)
  public ResponseEntity<Equipment> editFoodDrink(@RequestBody Equipment e){
	  System.out.println("PUT:  Equipment Controller");
    bookingService.editEquipment(e);
    return new ResponseEntity<Equipment>(e,HttpStatus.OK);
  }
}
