package com.adobe.prj.dao;

import java.util.List;

import com.adobe.prj.entity.Room;

public interface RoomDao {
		void addRoom(Room room);
		List<Room> getAllRooms(int pgnumber);
		Room getRoom(int id);
		void deleteRoom(int id);
	  void editRoom(Room room);

}
