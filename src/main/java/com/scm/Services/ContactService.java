package com.smart.service;

import java.util.List;

import com.smart.entity.Contact;

public interface ContactService {
	
	// for save user contact method...
  public Contact saveContact(Contact contact);
  
    // for display list of contact for user method...  
  public List<Contact> showContact();
  
    // for delete contact details using id method...
  public void deleteById(int id);

}
