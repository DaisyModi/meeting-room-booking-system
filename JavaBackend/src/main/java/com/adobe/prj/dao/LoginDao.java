package com.adobe.prj.dao;

import java.util.List;

import com.adobe.prj.entity.Login;

public interface LoginDao {

  List<Login> getAllLogins();

  void addLogin(Login login);

  Login getLogin(int id);

  void deleteUser(int id);

}