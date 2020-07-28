package com.adobe.prj.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adobe.prj.dao.BookingDao;
import com.adobe.prj.dao.EquipmentDao;
import com.adobe.prj.dao.FoodDrinkDao;
import com.adobe.prj.dao.LayoutDao;
import com.adobe.prj.dao.LoginDao;
import com.adobe.prj.dao.RoomDao;
import com.adobe.prj.dao.UserDao;
import com.adobe.prj.entity.Booking;
import com.adobe.prj.entity.Equipment;
import com.adobe.prj.entity.FoodDrink;
import com.adobe.prj.entity.Layout;
import com.adobe.prj.entity.Login;
import com.adobe.prj.entity.Room;
import com.adobe.prj.entity.User;

@Service
public class BookingServiceIpl implements BookingService {

  @Autowired
  private RoomDao roomDao;

  @Autowired
  private LayoutDao layoutDao;

  @Autowired
  private EquipmentDao equipmentDao;

  @Autowired
  private FoodDrinkDao foodDrinkDao;

  @Autowired
  private BookingDao bookingDao;

  @Autowired
  private UserDao userDao;

  @Autowired
  private LoginDao loginDao;

  @Override
  @Transactional
  public void addRoom(Room room) {
    System.out.println("Booking service" + room);
    roomDao.addRoom(room);
  }

  @Override
  @Transactional
  public List<Room> getAllRooms(int pageNumber) {
    System.out.println("Booking Service");
    List<Room> result = roomDao.getAllRooms(pageNumber);
    return result;

  }

  @Override
  @Transactional
  public Room getRoom(int id) {
    System.out.println("Booking Service");
    return roomDao.getRoom(id);
  }

  @Override
  @Transactional
  public void addLayout(Layout layout) {
    System.out.println("Booking Service");
    layoutDao.addLayout(layout);
  }

  @Override
  @Transactional
  public List<Layout> getAllLayouts(int pageNumber) {
    System.out.println("Booking Service");
    List<Layout> result = layoutDao.getLayouts(pageNumber);
    return result;
  }

  @Override
  @Transactional
  public Layout getLayout(int id) {
    System.out.println("Booking Service");
    return layoutDao.getLayout(id);
  }

  @Override
  @Transactional
  public void addEquipment(Equipment equipment) {
    equipmentDao.addEquipment(equipment);
  }

  @Override
  @Transactional
  public Equipment getEquipment(int id) {
    return equipmentDao.getEquipment(id);
  }

  @Override
  @Transactional
  public List<Equipment> getAllEquipments(int pageNumber) {
    return equipmentDao.getAllEquipments(pageNumber);
  }

  @Override
  @Transactional
  public void addFoodDrink(FoodDrink foodDrink) {
    foodDrinkDao.addFoodDrink(foodDrink);
  }

  @Override
  @Transactional
  public FoodDrink getFoodDrink(int id) {
    return foodDrinkDao.getFoodDrink(id);
  }

  @Override
  @Transactional
  public List<FoodDrink> getAllFoodDrinks(int pageNumber) {
    return foodDrinkDao.getAllFoodDrinks(pageNumber);
  }

  @Override
  @Transactional
  public List<Booking> getAllBookings() {
    List<Booking> result = bookingDao.getAllBookings();
    System.out.println("Booking Service");
    return result;
  }

  @Override
  @Transactional
  public Booking getBooking(int id) {
    return bookingDao.getBooking(id);
  }

  @Override
  @Transactional
  public boolean addBooking(Booking booking) {
    System.out.println("Booking Service");
    return bookingDao.addBooking(booking);
  }

  @Override
  @Transactional
  public void deleteRoom(int id) {
    roomDao.deleteRoom(id);
  }

  @Override
  @Transactional
  public void deleteLayout(int id) {
    layoutDao.deleteLayout(id);
  }

  @Override
  @Transactional
  public void deleteFoodDrink(int id) {
    foodDrinkDao.deleteFoodDrink(id);
  }

  @Override
  @Transactional
  public void deleteEquipment(int id) {
    equipmentDao.deleteEquipment(id);
  }

  @Override
  @Transactional
  public void deleteBooking(int id) {
    bookingDao.deleteBooking(id);
  }

  @Override
  @Transactional
  public User validateUser(Login login) {
    return userDao.validateUser(login);
  }

  @Override
  @Transactional
  public void register(User user) {
    userDao.addUser(user);
  }

  @Override
  @Transactional
  public List<User> getAllUsers() {
    List<User> res = userDao.getAllUsers();
    System.out.println(res);
    return res;
  }

  @Override
  @Transactional
  public void addUser(User user) {
    userDao.addUser(user);
  }

  @Override
  @Transactional
  public User getUser(String id) {
    return userDao.getUser(id);
  }

  @Override
  @Transactional
  public void deleteUser(String id) {
    userDao.deleteUser(id);
  }

  @Override
  @Transactional
  public List<Login> getAllLogins() {
    return loginDao.getAllLogins();
  }

  @Override
  @Transactional
  public void editRoom(Room room) {
    roomDao.editRoom(room);
  }

  @Override
  @Transactional
  public void editLayout(Layout layout) {
    layoutDao.editLayout(layout);
  }

  @Override
  @Transactional
  public void editFoodDrink(FoodDrink foodDrink) {
    foodDrinkDao.editFoodDrink(foodDrink);
  }

  @Override
  @Transactional
  public void editEquipment(Equipment equipment) {
    equipmentDao.editEquipment(equipment);
  }

  @Override
  @Transactional
  public Booking editBooking(Booking booking) {
    return bookingDao.editBooking(booking);
  }

  @Override
  @Transactional
  public void editUser(User user) {
    userDao.editUser(user);
  }

}
