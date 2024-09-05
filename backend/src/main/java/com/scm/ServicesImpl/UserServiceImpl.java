package com.smart.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smart.entity.User;
import com.smart.repository.UserRepository;
import com.smart.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	// save user method implementation..
	@Override	
	public User saveUser(User data) {
		return userRepository.save(data);
	}

	// user login implementation....
//	@Override
//	public boolean checkUser(String emailId, String password) {
//		ArrayList<String> al = new ArrayList<String>();
//		System.out.println(emailId);
//		System.out.println(password);
//		ArrayList<String> al1 = new ArrayList<>();
//		al1.addAll(userRepository.findAllPassword());
//		al1.addAll(userRepository.findAllUserName())
//		int cnt = 0;
//		for (int i = 0; i < al.size(); i++) {
//			for (int j = 0; j < al1.size(); j++) {
//				if (al.get(i) == emailId && al1.get(j) == password) {
//					cnt++;
//				
//					break;
//
//				}
//			}
//		}
//		if (cnt != 0)
//			return true;
//		else
//			return false;
	}


