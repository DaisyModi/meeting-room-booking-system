package com.adobe.prj.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="equipments")
public class Equipment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	
	@Column(name = "multi_units")
	private boolean mutliUnits ;
	
	@Column(name = "per_booking")
	private boolean perBooking;
	private double price;
	
	public Equipment(int id, String title, boolean mutliUnits, boolean perBooking, double price) {
		this.id = id;
		this.title = title;
		this.mutliUnits = mutliUnits;
		this.perBooking = perBooking;
		this.price = price;
	}
	
	public Equipment(String title, boolean mutliUnits, double price, boolean perBooking) {
		this.title = title;
		this.mutliUnits = mutliUnits;
		this.price = price;
		this.perBooking = perBooking;
	}

	public Equipment() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isPerBooking() {
		return perBooking;
	}

	public void setPerBooking(boolean perBooking) {
		this.perBooking = perBooking;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public boolean isMutliUnits() {
		return mutliUnits;
	}
	public void setMutliUnits(boolean mutliUnits) {
		this.mutliUnits = mutliUnits;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
}
