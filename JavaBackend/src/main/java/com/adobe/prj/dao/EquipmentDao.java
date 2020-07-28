package com.adobe.prj.dao;

import java.util.List;

import com.adobe.prj.entity.Equipment;

public interface EquipmentDao {
	void addEquipment (Equipment equipment);
	List<Equipment> getAllEquipments(int pageNumber);
	Equipment getEquipment(int id);
  void deleteEquipment(int id);
  void editEquipment(Equipment equipment);

}
