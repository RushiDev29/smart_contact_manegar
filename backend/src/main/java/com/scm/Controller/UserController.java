package com.smart.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smart.entity.User;
import com.smart.repository.UserRepository;
import com.smart.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {
	
	@Autowired 
	UserService userService;
	@Autowired
	UserRepository userRepository;
	

	// save user from DB.....
	
	@PostMapping("/save")
	public User addUser(@RequestBody User data) 
	{
		System.out.println(data);
		return userService.saveUser(data);
		
	}
	
	// user login form DB
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest) {
	    String username = loginRequest.get("username");
	    String password = loginRequest.get("password");

	    System.out.println("Received username: " + username);
	    System.out.println("Received password: " + password);

	    Optional<User> userOptional = userRepository.findByUsername(username);

	    if (userOptional.isPresent()) {
	        User user = userOptional.get();
	        if (user.getPassword().equals(password)) {
	            return ResponseEntity.ok("Login successful");
	        } else {
	            System.out.println("Password mismatch for username: " + username);
	        }
	    } else {
	        System.out.println("User not found: " + username);
	    }
	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	}

	
       

}
