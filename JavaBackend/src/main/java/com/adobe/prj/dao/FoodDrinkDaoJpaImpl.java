package com.adobe.prj.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.FoodDrink;

@Repository
public class FoodDrinkDaoJpaImpl implements FoodDrinkDao {
	
	@PersistenceContext
	EntityManager em;

	@Override
	public void addFoodDrink(FoodDrink foodDrink) {
		em.persist(foodDrink);
	}

	@Override
  public List<FoodDrink> getAllFoodDrinks(int pageNumber) {
    String JPQL = "from FoodDrink";
    TypedQuery<FoodDrink> query = em.createQuery(JPQL, FoodDrink.class);
    query.setFirstResult(pageNumber*5);
    query.setMaxResults(5);
    return query.getResultList();
  }

	@Override
	public FoodDrink getFoodDrink(int id) {
		return em.find(FoodDrink.class, id);
	}

  @Override
  public void deleteFoodDrink(int id) {
    em.remove(this.getFoodDrink(id));
  }
  @Override
  public void editFoodDrink(FoodDrink foodDrink) {
    em.merge(foodDrink);
  }
}
