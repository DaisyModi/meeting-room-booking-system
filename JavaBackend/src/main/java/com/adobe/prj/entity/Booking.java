package com.adobe.prj.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "bookings")
public class Booking {
	// add hourly and half day options
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Temporal(TemporalType.DATE)
	private Date start_date;
	@Temporal(TemporalType.DATE)
	private Date end_date;
	@Min(1)
	private int attendees;

	@OneToOne
	@JoinColumn(name = "roomid")
	@JsonIgnoreProperties("layouts")
	private Room room;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "layoutid")
	@JsonIgnoreProperties("rooms")
	private Layout layout;

	private int duration; // change from int (4 options)

	@Column(name = "hour_slot")
	private Integer hourSlot;
//
//	@Column(name = "day_slot")
//	private Integer daySlot;

	private int status; // change from int (3 options)
	@Column(name = "payment_method")
	private int paymentMethod; // change from int (4-5 options)

	@OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "client_id")
	private Client client;

	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "booking_id")
	private List<EquipmentItem> equipmentItem;

	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "booking_id")
	private List<FoodDrinksItem> foodDrinkItem;

	@Column(name = "sub_total")
	private double subTotal;
	private double tax;
	private double total;
	private double deposit;

	public Booking() {
	}

	public Booking(Date start_date, Date end_date, int attendees, Room room, Layout layout, int duration,
			Integer hourSlot, Integer daySlot, int status, int paymentMethod, Client client,
			List<EquipmentItem> equipmentItem, List<FoodDrinksItem> foodDrinkItem, double subTotal, double tax,
			double total, double deposit) {
		this.start_date = start_date;
		this.end_date = end_date;
		this.attendees = attendees;
		this.room = room;
		this.layout = layout;
		this.duration = duration;
		this.hourSlot = hourSlot;
//		this.daySlot = daySlot;
		this.status = status;
		this.paymentMethod = paymentMethod;
		this.client = client;
		this.equipmentItem = equipmentItem;
		this.foodDrinkItem = foodDrinkItem;
		this.subTotal = getSubTotal(room, equipmentItem, foodDrinkItem);
		this.tax = 0.12 * this.subTotal;
		this.total = this.subTotal + this.tax;
		this.deposit = deposit;
	}

	private double getSubTotal(Room room, List<EquipmentItem> equipmentItem, List<FoodDrinksItem> foodDrinkItem) {
		double price = 0.0;
		switch (this.duration) {
		case 0:
			price += room.getPricePerHour();
			break;
		case 1:
			price += room.getPricePerHalfDay();
			break;
		case 2:
			price += room.getPricePerDay();
			break;
		default:
			price += 0;
		}
		for (EquipmentItem eq : equipmentItem) {
			price += eq.getEquipment().getPrice() * eq.getQty();
		}
		for (FoodDrinksItem fd : foodDrinkItem) {
			price += fd.getFoodDrink().getPrice() * fd.getQty();
		}
		return price;
	}

	public int getId() {
		return id;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public int getAttendees() {
		return attendees;
	}

	public void setAttendees(int attendees) {
		this.attendees = attendees;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

	public Layout getLayout() {
		return layout;
	}

	public void setLayout(Layout layout) {
		this.layout = layout;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(int paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public List<EquipmentItem> getEquipmentItem() {
		return equipmentItem;
	}

	public void setEquipmentItem(List<EquipmentItem> equipmentItem) {
		this.equipmentItem = equipmentItem;
	}

	public Integer getHourSlot() {
		return hourSlot;
	}

	public void setHourSlot(Integer hourSlot) {
		this.hourSlot = hourSlot;
	}

//	public Integer getDaySlot() {
//		return daySlot;
//	}
//
//	public void setDaySlot(Integer daySlot) {
//		this.daySlot = daySlot;
//	}

	public List<FoodDrinksItem> getFoodDrinkItem() {
		return foodDrinkItem;
	}

	public void setFoodDrinkItem(List<FoodDrinksItem> foodDrinkItem) {
		this.foodDrinkItem = foodDrinkItem;
	}

	public double getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(double subTotal) {
		this.subTotal = subTotal;
	}

	public double getTax() {
		return tax;
	}

	public void setTax(double tax) {
		this.tax = tax;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public double getDeposit() {
		return deposit;
	}

	public void setDeposit(double deposit) {
		this.deposit = deposit;
	}

	@Override
	public String toString() {
		return "Booking [id=" + id + ", start_date=" + start_date + ", end_date=" + end_date + ", attendees="
				+ attendees + ", room=" + room + ", layout=" + layout + ", duration=" + duration + ", hourSlot="
				+ hourSlot +  ", status=" + status + ", paymentMethod=" + paymentMethod
				+ ", client=" + client + ", equipmentItem=" + equipmentItem + ", foodDrinkItem=" + foodDrinkItem
				+ ", subTotal=" + subTotal + ", tax=" + tax + ", total=" + total + ", deposit=" + deposit + "]";
	}

}
