package com.adobe.prj.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Equipment;

@Repository
public class EquipmentDaoJpaImpl implements EquipmentDao {

	@PersistenceContext
	EntityManager em;
	@Override
	public void addEquipment(Equipment equipment) {
		em.persist(equipment);
	}

	@Override
  public List<Equipment> getAllEquipments(int pageNumber) {
    String JPQL = "from Equipment";
    TypedQuery<Equipment> query = em.createQuery(JPQL, Equipment.class);
    query.setFirstResult(pageNumber*5);
    query.setMaxResults(5);
    return query.getResultList();
  }

	@Override
	public Equipment getEquipment(int id) {
		return em.find(Equipment.class, id);
	}

  @Override
  public void deleteEquipment(int id) {
    em.remove(this.getEquipment(id));
  }
  
  @Override
  public void editEquipment(Equipment equipment) {
    em.merge(equipment);
  }

}
