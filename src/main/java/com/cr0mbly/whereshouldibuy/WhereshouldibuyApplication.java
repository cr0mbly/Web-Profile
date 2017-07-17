package com.cr0mbly.whereshouldibuy;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import com.cr0mbly.whereshouldibuy.services.interfaces.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WhereshouldibuyApplication{

	public static void main(String[] args) {
		SpringApplication.run(WhereshouldibuyApplication.class, args);
	}
}
