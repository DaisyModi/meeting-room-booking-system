package com.adobe.prj.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Client;

@Repository
public class ClientDaoJpaImpl implements ClientDao {

	@PersistenceContext
	EntityManager em;
	
	@Override
	public void addClient(Client client) {
		em.persist(client);
	}

	@Override
	public Client getClient(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
