package com.smart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smart.entity.Contact;
import com.smart.service.ContactService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class ContactController {
	
	@Autowired
	ContactService contactService;
	
	// for add contacts method
	@PostMapping("/addcontact")
	public Contact addContact(@RequestBody Contact contact) {
		System.out.println(contact);
		System.out.println("iits work good");
		return contactService.saveContact(contact);
		//System.out.println("after ");
		
	}
	
	// for show contact methods..
	@GetMapping("/display")
	public List<Contact> showAll(){
		List<Contact> allcontact = contactService.showContact();
		System.out.println(allcontact);
		System.out.println("workig");
		return allcontact;
	}
	
	// for delete contact method...
	@DeleteMapping("/delete/{id}")
	public void deleteContact(@PathVariable int id) 
	{
		contactService.deleteById(id);
		System.out.println("id is "+id);
		
		
	}

}
