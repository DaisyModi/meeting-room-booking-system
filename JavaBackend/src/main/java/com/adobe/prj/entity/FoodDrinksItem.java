package com.adobe.prj.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="food_drink_items")
public class FoodDrinksItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="quantity")
	private int qty;
	
	@ManyToOne
	@JoinColumn(name = "fd_id")
	private FoodDrink foodDrink;
	private double amount;
	
	
	public FoodDrinksItem(int id, int qty, FoodDrink foodDrink, double amount) {
		super();
		this.id = id;
		this.qty = qty;
		this.foodDrink = foodDrink;
		this.amount = amount;
	}
	
	public FoodDrinksItem(){
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public FoodDrink getFoodDrink() {
		return foodDrink;
	}
	public void setFoodDrink(FoodDrink foodDrink) {
		this.foodDrink = foodDrink;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	
	
}
