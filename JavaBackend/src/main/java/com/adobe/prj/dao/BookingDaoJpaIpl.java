package com.adobe.prj.dao;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Booking;
import com.adobe.prj.entity.Equipment;
import com.adobe.prj.entity.EquipmentItem;
import com.adobe.prj.entity.FoodDrink;
import com.adobe.prj.entity.FoodDrinksItem;
import com.adobe.prj.entity.Layout;
import com.adobe.prj.entity.Room;

@Repository
public class BookingDaoJpaIpl implements BookingDao {

	@PersistenceContext
	EntityManager em;

	@Override
	@Transactional
	public boolean addBooking(Booking booking) {
	  if(checkAvailability(booking)){
	    booking.setId(0);
	    em.persist(booking);
	    return true;
	  }
		return false;
	}

	@Override
	public List<Booking> getAllBookings() {
		String JPQL = "from Booking";
		TypedQuery<Booking> query = em.createQuery(JPQL,Booking.class);
		return query.getResultList();
	}

	@Override
	public Booking getBooking(int id) {
		return em.find(Booking.class, id);
	}
	

  private boolean checkAvailability(Booking booking){
    System.out.println(booking);
    boolean returnValue = true;
    switch(booking.getDuration()){
      case 0: returnValue = checkHour(booking.getHourSlot(),booking.getStart_date(),booking.getRoom());break;
      case 3: returnValue = checkFull(booking.getStart_date(),booking.getEnd_date(),booking.getRoom());break;
      default: returnValue = checkHalf(booking.getDuration(),booking.getRoom(),booking.getStart_date());
    }
    System.out.println("retVal " + returnValue);
    return returnValue;
  }

  private boolean checkFull(Date start_date, Date end_date, Room room) {
    String JPQL = "SELECT b FROM Booking b WHERE b.start_date = :startDate and b.end_date = :endDate and b.room = :room";
    Query query=em.createQuery(JPQL);
    query.setParameter("startDate", start_date);
    query.setParameter("endDate", end_date);
    query.setParameter("room", room);
    List<Booking> l = query.getResultList();
    if(l.size()>0){
      return false;
    }
    return true;
  }

  private boolean checkHalf(int duration, Room room, Date start_date) {
    System.out.println(duration);
    System.out.println(start_date);
    System.out.println(room);
    String JPQL = "SELECT b FROM Booking b WHERE b.start_date = :startDate and b.room = :room";
    TypedQuery<Booking> query=em.createQuery(JPQL,Booking.class);
    query.setParameter("startDate", start_date);
    query.setParameter("room", room);
    List<Booking> l = query.getResultList();
    System.out.println(l);
    if(l.size()==0){
      return true;
    }
    for(Booking b:l){
      // check if booking exist for same daySlot
      if(b.getDuration()==duration){
        return false;
      }
      if(duration == 0){
        //check if any hour is booked for that daySlot
        if(b.getHourSlot() != null && b.getHourSlot()<4){
          return false;
        }
      }else{
        if(b.getHourSlot() != null && b.getHourSlot()<8){
          return false;
        }
      }
    }
    return true;
  }

  private boolean checkHour(Integer hourSlot, Date start_date, Room room) {
    System.out.println(hourSlot);
    System.out.println(start_date);
    System.out.println(room);
    String JPQL = "SELECT COUNT(*) FROM Booking b WHERE b.hourSlot = :hourSlot and b.start_date = :startDate and b.room = :room";
    Query query=em.createQuery(JPQL);
    query.setParameter("hourSlot", hourSlot);
    query.setParameter("startDate", start_date);
    query.setParameter("room", room);
    int l = query.getMaxResults();
    System.out.println(l);
    System.out.println(query.getResultList());
    if(l>0){
      return false;
    }
    return true;
  }

  @Override
  public void deleteBooking(int id) {
    em.remove(this.getBooking(id));
  }

  @Override
  @Transactional
  public Booking editBooking(Booking booking) {
    booking.setRoom(em.find(Room.class,booking.getRoom().getId()));
    booking.setLayout(em.find(Layout.class,booking.getLayout().getId()));
    List<EquipmentItem> eqItems = booking.getEquipmentItem();
    for(EquipmentItem i : eqItems){
      i.setEquipment(em.find(Equipment.class, i.getEquipment().getId()));
    }
    List<FoodDrinksItem> fdItems = booking.getFoodDrinkItem();
    for(FoodDrinksItem i : fdItems){
      i.setFoodDrink(em.find(FoodDrink.class, i.getFoodDrink().getId()));
    }
    em.merge(booking);
    return this.getBooking(booking.getId());
  }

}
