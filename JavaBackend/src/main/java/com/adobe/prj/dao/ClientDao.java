package com.adobe.prj.dao;

import com.adobe.prj.entity.Client;

public interface ClientDao {
	void addClient(Client client);
	Client getClient(int id);
}
