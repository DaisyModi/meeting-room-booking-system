package com.adobe.prj.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Login;

@Repository
public class LoginDaoIpl implements LoginDao {
  @PersistenceContext
  EntityManager em;
  
  /* (non-Javadoc)
   * @see com.adobe.prj.dao.LoginDao#getAllLogins()
   */
  @Override
  @Transactional
  public List<Login> getAllLogins() {
    String JPQL = "from Login";
    TypedQuery<Login> query = em.createQuery(JPQL,Login.class);
    System.out.println(query.getResultList());
    return query.getResultList();
  }
  
  /* (non-Javadoc)
   * @see com.adobe.prj.dao.LoginDao#addLogin(com.adobe.prj.entity.Login)
   */
  @Override
  @Transactional
  public void addLogin(Login login) {
    em.persist(login);
  }
  
  /* (non-Javadoc)
   * @see com.adobe.prj.dao.LoginDao#getLogin(int)
   */
  @Override
  @Transactional
  public Login getLogin(int id) {
    return em.find(Login.class,id);
  }
  
  /* (non-Javadoc)
   * @see com.adobe.prj.dao.LoginDao#deleteUser(int)
   */
  @Override
  @Transactional
  public void deleteUser(int id) {
    em.remove(this.getLogin(id));
  }
  
  
}
