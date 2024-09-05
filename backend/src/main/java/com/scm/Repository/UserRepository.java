package com.smart.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smart.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	
	Optional<User> findByUsername(String username);
	
	
//@Query(value = "select user_Name from user order by u_id",nativeQuery = true)
//public List<String> findAllUserName();
//
//@Query(value = "select password from user order by u_id",nativeQuery = true)
//public List<String> findAllPassword();	

}
