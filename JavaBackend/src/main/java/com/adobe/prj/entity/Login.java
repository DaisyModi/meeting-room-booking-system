package com.adobe.prj.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "logins")
public class Login {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Pattern(regexp = "^(.+)@(.+)$")
  private String email;
  private String password;
  private String timestamp;
  private int sessionId;

  @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
  private User user;

  public User getUser() {
    return user;
  }

  public Login(String email, String password, User user) {
    this.email = email;
    this.password = password;
    this.user = user;
  }

  public Login() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getSessionId() {
    return sessionId;
  }

  public void setSessionId(int sessionId) {
    this.sessionId = sessionId;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Login(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public String getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(String timestamp) {
    this.timestamp = timestamp;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public String toString() {
    return "Login [id=" + id + ", email=" + email + ", password=" + password + ", timestamp="
        + timestamp + ", sessionId=" + sessionId + ", user=" + user + "]";
  }
  
  
}
