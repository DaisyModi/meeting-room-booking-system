package com.adobe.prj.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Login;
import com.adobe.prj.entity.User;
import com.adobe.prj.utilities.CurrentTimeStamp;

@Repository
public class UserDaoIpl implements UserDao {

  @PersistenceContext
  private EntityManager em;

  @Transactional
  public User validateUser(Login login) {
    String sql = "select u from User u where u.email is :username and u.password is :password";
    TypedQuery<User> query = em.createQuery(sql, User.class);
    query.setParameter("username", login.getEmail());
    query.setParameter("password", login.getPassword());
    List<User> users = query.getResultList();
    if (users.size() > 0) {
      login.setUser(users.get(0));
      login.setTimestamp(CurrentTimeStamp.getTimestamp());
      em.persist(login);
    }
    return users.size() > 0 ? users.get(0) : null;
  }

  @Transactional
  public List<User> getAllUsers() {
    String JPQL = "from User";
    TypedQuery<User> query = em.createQuery(JPQL, User.class);
    System.out.println(query.getResultList());
    return query.getResultList();
  }

  @Transactional
  public void addUser(User user) {
    em.persist(user);
  }

  @Transactional
  public User getUser(String id) {
    return em.find(User.class, id);
  }

  @Transactional
  public void deleteUser(String id) {
    em.remove(this.getUser(id));
  }

  @Override
  @Transactional
  public void editUser(User user) {
    em.merge(user);
  }

}
