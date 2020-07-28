package com.adobe.prj.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Layout;

@Repository
public class LayoutDaoJpaIpl implements LayoutDao {

	@PersistenceContext
	private EntityManager em;
	
	@Transactional
	public void addLayout(Layout layout) {
		System.out.println("LDJI");
		em.merge(layout);
		System.out.println("LDJI end");
	}

	@Override
	public List<Layout> getLayouts(int pageNumber) {
		String JPQL = "from Layout";
		TypedQuery<Layout> query = em.createQuery(JPQL,Layout.class);
		query.setFirstResult(pageNumber*3);
    query.setMaxResults(3);
		return query.getResultList();
	}

	@Override
	public Layout getLayout(int id) {
		return em.find(Layout.class, id);
	}

  @Override
  public void deleteLayout(int id) {
    em.remove(this.getLayout(id));
  }
	
  @Override
  public void editLayout(Layout layout) {
    Layout l = getLayout(layout.getId());
    layout.setRooms(l.getRooms());
    em.merge(layout);
  }

}
