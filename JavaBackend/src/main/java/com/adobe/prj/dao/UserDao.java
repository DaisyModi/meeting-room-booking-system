package com.adobe.prj.dao;

import java.util.List;

import com.adobe.prj.entity.Login;
import com.adobe.prj.entity.User;

public interface UserDao {

//  void register(User user);

  User validateUser(Login login);

  List<User> getAllUsers();

  void addUser(User user);

  User getUser(String id);

  void deleteUser(String id);
  
  void editUser(User user);

}