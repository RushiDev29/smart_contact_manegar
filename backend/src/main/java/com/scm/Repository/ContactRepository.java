package com.smart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smart.entity.Contact;

public interface ContactRepository  extends JpaRepository<Contact, Integer>{

}
