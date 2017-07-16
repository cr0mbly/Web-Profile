package com.cr0mbly.whereshouldibuy;

import com.cr0mbly.whereshouldibuy.dataModels.User;
import com.cr0mbly.whereshouldibuy.services.interfaces.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WhereshouldibuyApplication implements CommandLineRunner{

	@Autowired
	public UserLoginService repository;

	public static void main(String[] args) {
		SpringApplication.run(WhereshouldibuyApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		repository.deleteAll();

		repository.save(new User("cr0mbly", "Aidan", "Houlihan", "aidandhoulihan@gmail.com", "azqazq12"));

		System.out.println(repository.findByUserID("cr0mbly"));

	}
}
