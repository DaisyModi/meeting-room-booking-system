package com.adobe.prj.dao;

import java.util.List;

import com.adobe.prj.entity.FoodDrink;

public interface FoodDrinkDao {
	void addFoodDrink (FoodDrink foodDrink);
	List<FoodDrink> getAllFoodDrinks(int pageNumber);
	FoodDrink getFoodDrink(int id);
  void deleteFoodDrink(int id);
  void editFoodDrink(FoodDrink foodDrink);

}
