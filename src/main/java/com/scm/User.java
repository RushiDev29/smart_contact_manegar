package com.smart.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "USER")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int uid;
	private String username;
	@Column(unique = true)
	private String emailid;
	private String password;
	private String name;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
	private List<Contact> contacts = new ArrayList<>();

	// getter and setter for fields...
	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Contact> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}

	// Constructor user filds...

	public User(int uid, String username, String emailid, String password, String name, List<Contact> contacts) {
		super();
		this.uid = uid;
		this.username = username;
		this.emailid = emailid;
		this.password = password;
		this.name = name;
		this.contacts = contacts;
	}

	// Default constructor for fields...
	public User() {

	}

	@Override
	public String toString() {
		return "User [uid=" + uid + ", username=" + username + ", emailid=" + emailid + ", password=" + password
				+ ", name=" + name + ", contacts=" + contacts + "]";
	}

	// toString for print object....
	
}
