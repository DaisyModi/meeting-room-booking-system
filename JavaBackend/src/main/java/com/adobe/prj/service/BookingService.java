package com.adobe.prj.service;

import java.util.List;


import com.adobe.prj.entity.Booking;
import com.adobe.prj.entity.Equipment;
import com.adobe.prj.entity.FoodDrink;
import com.adobe.prj.entity.Layout;
import com.adobe.prj.entity.Login;
import com.adobe.prj.entity.Room;
import com.adobe.prj.entity.User;

public interface BookingService {

	void addRoom(Room room);

	List<Room> getAllRooms(int pageNumber);

	Room getRoom(int id);
	
	void deleteRoom(int id);

	void addLayout(Layout layout);

	List<Layout> getAllLayouts(int pageNumber);

	Layout getLayout(int id);

	void addEquipment(Equipment equipment);

	Equipment getEquipment(int id);

	List<Equipment> getAllEquipments(int pageNumber);

	void addFoodDrink(FoodDrink foodDrink);

	FoodDrink getFoodDrink(int id);

	List<FoodDrink> getAllFoodDrinks(int pageNumber);
	
	List<Booking> getAllBookings();
	
	Booking getBooking(int id);
	
	boolean addBooking(Booking booking);

  void deleteLayout(int id);

  void deleteFoodDrink(int id);

  void deleteEquipment(int id);

  void deleteBooking(int id);

  User validateUser(Login login);

  void register(User user);

  List<User> getAllUsers();

  void addUser(User user);

  User getUser(String id);

  void deleteUser(String id);

  List<Login> getAllLogins();

  void editEquipment(Equipment e);

  void editFoodDrink(FoodDrink f);

  void editLayout(Layout l);

  void editRoom(Room r);

  Booking editBooking(Booking booking);

  void editUser(User user);
	
}