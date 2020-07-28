package com.adobe.prj.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Pattern;

import com.adobe.prj.utilities.ValidPassword;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="users")
public class User {
  @Id
  @Pattern(regexp = "^(.+)@(.+)$")
  private String email;
  @ValidPassword
  private String password;
  private String role;
  private boolean status;
  @Temporal(TemporalType.DATE)
  private Date createdAt;
  private String firstname;
  private String lastname;
  private String address;
  @Pattern(regexp="(^$|[0-9]{10})")
  private String phone;
  
  public User() {
  }
  public User(String firstname, String lastname, String address, String phone) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.phone = phone;
  }
  
  public String getRole() {
    return role;
  }
  public void setRole(String role) {
    this.role = role;
  }
  public boolean isStatus() {
    return status;
  }
  public void setStatus(boolean status) {
    this.status = status;
  }
  public Date getCreatedAt() {
    return createdAt;
  }
  public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
  }
  public String getEmail() {
    return email;
  }
  public String getPassword() {
    return password;
  }
  public void setEmail(String username) {
    this.email = username;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getFirstname() {
    return firstname;
  }
  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }
  public String getLastname() {
    return lastname;
  }
  public void setLastname(String lastname) {
    this.lastname = lastname;
  }
  public String getAddress() {
    return address;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  public String getPhone() {
    return phone;
  }
  public void setPhone(String phone) {
    this.phone = phone;
  }
}
