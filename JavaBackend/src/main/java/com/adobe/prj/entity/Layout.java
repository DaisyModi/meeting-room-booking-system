package com.adobe.prj.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="layouts")
public class Layout{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	String title;
	String image_path;
	
	@ManyToMany(mappedBy ="layouts",fetch = FetchType.EAGER)
	@JsonIgnoreProperties("layouts")
	private List<Room> rooms = new ArrayList<>();

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImage_path() {
		return image_path;
	}

	public void setImage_path(String image_path) {
		this.image_path = image_path;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Room> getRooms() {
		return rooms;
	}

	public void setRooms(List<Room> rooms) {
		this.rooms = rooms;
	}

	public Layout(int id, String title) {
		this.id = id;
		this.title = title;
	}

	public Layout() {
	}

	@Override
	public String toString() {
		return "Layout [id=" + id + ", title=" + title + ", image_path=" + image_path + ""
//				+ ", rooms=" + rooms 
				+ "]";
	}

	
	
	
}
