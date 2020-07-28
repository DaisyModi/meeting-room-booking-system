package com.adobe.prj.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "rooms")
public class Room {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String title;
  @Column(name = "price_per_day", nullable = true)
  private Double pricePerDay;
  @Column(name = "price_per_hour", nullable = true)
  private Double pricePerHour;
  @Column(name = "price_per_half_day", nullable = true)
  private Double pricePerHalfDay;
  @Column(name = "image_path")
  private String imagePath;
  private int capacity;
  private String description;
  @Column(name = "status")
  private boolean active;
  @Column(name = "no_of_bookings")
  private int noOfBookings;

  @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
  @JoinTable(name = "room_layout", joinColumns = {
      @JoinColumn(name = "roomid") }, inverseJoinColumns = { @JoinColumn(name = "layoutid") })
  @JsonIgnoreProperties("rooms")
  private List<Layout> layouts = new ArrayList<>();

  public Room(int id, String title, Double pricePerDay, Double pricePerHour, Double pricePerHalfDay,
      int capacity, boolean active, List<Layout> layouts) {
    this.id = id;
    this.title = title;
    this.pricePerDay = pricePerDay;
    this.pricePerHour = pricePerHour;
    this.pricePerHalfDay = pricePerHalfDay;
    this.capacity = capacity;
    this.active = active;
    this.layouts = layouts;
  }

  public Room() {
    // System.out.println("Empty data");
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Double getPricePerDay() {
    return pricePerDay;
  }

  public void setPricePerDay(double pricePerDay) {
    this.pricePerDay = pricePerDay;
  }

  public Double getPricePerHour() {
    return pricePerHour;
  }

  public void setPricePerHour(double pricePerHour) {
    this.pricePerHour = pricePerHour;
  }

  public Double getPricePerHalfDay() {
    return pricePerHalfDay;
  }

  public void setPricePerHalfDay(double pricePerHalfDay) {
    this.pricePerHalfDay = pricePerHalfDay;
  }

  public String getImagePath() {
    return imagePath;
  }

  public void setImagePath(String imagePath) {
    this.imagePath = imagePath;
  }

  public int getCapacity() {
    return capacity;
  }

  public void setCapacity(int capacity) {
    this.capacity = capacity;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isActive() {
    return active;
  }

  public void setStatus(boolean active) {
    this.active = active;
  }

  public int getNoOfBookings() {
    return noOfBookings;
  }

  public void setNoOfBookings(int noOfBookings) {
    this.noOfBookings = noOfBookings;
  }

  public List<Layout> getLayouts() {
    return layouts;
  }

  public void setLayouts(List<Layout> layouts) {
    this.layouts = layouts;
  }

  @Override
  public String toString() {
    return "Room [id=" + id + ", title=" + title + ", pricePerDay=" + pricePerDay
        + ", pricePerHour=" + pricePerHour + ", pricePerHalfDay=" + pricePerHalfDay + ", imagePath="
        + imagePath + ", capacity=" + capacity + ", description=" + description + ", active="
        + active + ", noOfBookings=" + noOfBookings + ", layouts=" + layouts + "]";
  }

}
