package com.adobe.prj.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Layout;
import com.adobe.prj.entity.Room;

@Repository
public class RoomDaoJpaIpl implements RoomDao {
	@PersistenceContext
	private EntityManager em;
	
	@Transactional
	public void addRoom(Room room) {
		System.out.println("DAOJI");
		em.persist(room);
	}
	@Override
  public List<Room> getAllRooms(int pageNumber) {
    String JPQL = "from Room";
    TypedQuery<Room> query = em.createQuery(JPQL, Room.class);
    query.setFirstResult(pageNumber*3);
    query.setMaxResults(3);
    List<Room> results = query.getResultList();
    return results;
  }
	
//	@Override
//	public List<Room> getAllRooms() {
//		String JPQL = "from Room";
//		TypedQuery<Room> query = em.createQuery(JPQL,Room.class);
////		System.out.println("RDJI" + query.getResultList());
//		return query.getResultList();
//	}

	@Override
	public Room getRoom(int id) {
		return em.find(Room.class, id);
	}
	
	@Transactional
	public void deleteRoom(int id){
	  em.remove(this.getRoom(id));
	}
	
	@Override
  public void editRoom(Room room) {
    List<Layout> onlyId = room.getLayouts();
    List<Layout> completeLayout = new ArrayList<Layout>();
    for(Layout l : onlyId) {
      completeLayout.add(em.find(Layout.class,l.getId()));
    }
    room.setLayouts(completeLayout);
    em.merge(room);
  }

}
