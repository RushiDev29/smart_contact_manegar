package com.smart.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.smart.entity.Contact;
import com.smart.repository.ContactRepository;
import com.smart.service.ContactService;

@Service
public class ContactServiceImpl implements ContactService {
	
	@Autowired
	ContactRepository contactRepo;

	// save user contact implemented method...
	@Override
	public Contact saveContact(Contact contact)
	{
		Contact save = contactRepo.save(contact);
		return save;
	}
      // display user contact list implemented  method....
	@Override
	public List<Contact> showContact() 
	{
		List<Contact> list = contactRepo.findAll();
		return list;
	}
	
	// delete contact of user by id method....
	@Override
	public void deleteById(int id) 
	{
		contactRepo.deleteById(id);
	}

	
	

	


}
