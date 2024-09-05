package com.smart.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "CONTACT")
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cId;
	private String name;
	private String nickName;
	private String email;
	private String mNumber;
	private String profetion;


	@ManyToOne(cascade = CascadeType.ALL)
	private User user;
	
	// Gatter and setter for fields ....

	public int getcId() {
		return cId;
	}


	public void setcId(int cId) {
		this.cId = cId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getNickName() {
		return nickName;
	}


	public void setNickName(String nickName) {
		this.nickName = nickName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getmNumber() {
		return mNumber;
	}


	public void setmNumber(String mNumber) {
		this.mNumber = mNumber;
	}


	public String getProfetion() {
		return profetion;
	}


	public void setProfetion(String profetion) {
		this.profetion = profetion;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}

	// constructor using filds...

	public Contact(int cId, String name, String nickName, String email, String mNumber, String profetion, User user) {
		super();
		this.cId = cId;
		this.name = name;
		this.nickName = nickName;
		this.email = email;
		this.mNumber = mNumber;
		this.profetion = profetion;
		this.user = user;
	}


	// default constructor...
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "Contact [cId=" + cId + ", name=" + name + ", nickName=" + nickName + ", email=" + email + ", mNumber="
				+ mNumber + ", profetion=" + profetion + ", user=" + user + "]";
	}
	
	
}
