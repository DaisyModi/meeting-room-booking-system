package com.adobe.prj.dao;

import java.util.List;

import com.adobe.prj.entity.Layout;

public interface LayoutDao {
	public void addLayout(Layout layout);
	public List<Layout> getLayouts(int pageNumber);
	public Layout getLayout(int id);
  public void deleteLayout(int id);
  void editLayout(Layout layout);

}
