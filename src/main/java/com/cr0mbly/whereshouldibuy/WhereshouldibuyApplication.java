package com.cr0mbly.whereshouldibuy;

import com.cr0mbly.whereshouldibuy.dataModels.User;
import com.cr0mbly.whereshouldibuy.services.interfaces.MongoDBConnector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class WhereshouldibuyApplication implements CommandLineRunner{

	@Autowired
	MongoDBConnector repository;

	public static void main(String[] args) {
		SpringApplication.run(WhereshouldibuyApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		repository.deleteAll();

		// save a couple of customers
		repository.save(new User("Alice", "Smith", "alice.smith@gmail.com", "password1"));
		repository.save(new User("Andrew", "Smith", "andrew.smith@gmail.com", "password1"));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (User customer : repository.findAll()) {
			System.out.println(customer);
		}
		System.out.println();

		// fetch an individual customer
		System.out.println("Customer found with findByFirstName('Alice'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByEmail("alice.smith@gmail.com"));

		System.out.println("Customers found with findByLastName('Smith'):");
		System.out.println("--------------------------------");

	}
}
