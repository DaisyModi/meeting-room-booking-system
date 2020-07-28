package com.adobe.prj.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import org.springframework.format.annotation.NumberFormat;

@Entity
@Table(name = "clients")
public class Client {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  
  private String title;
  private String name;
  @Pattern(regexp = "^(.+)@(.+)$")
  private String email;
  @Pattern(regexp="(^$|[0-9]{10})")
  private String phone;
  private String notes;
  private String company;
  private String Address;
  private String city;
  private String state;
  private int zip;
  private String country;

  public Client(int id, String title, String name, String email, String phone, String notes,
      String company, String address, String city, String state, int zip, String country) {
    super();
    this.id = id;
    this.title = title;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.notes = notes;
    this.company = company;
    Address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
  }

  public Client(String title, String name, String email, String phone, String notes, String company,
      String address, String city, String state, int zip, String country) {
    super();
    this.title = title;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.notes = notes;
    this.company = company;
    Address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
  }

  public Client() {
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

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  public String getAddress() {
    return Address;
  }

  public void setAddress(String address) {
    Address = address;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public int getZip() {
    return zip;
  }

  public void setZip(int zip) {
    this.zip = zip;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

}
