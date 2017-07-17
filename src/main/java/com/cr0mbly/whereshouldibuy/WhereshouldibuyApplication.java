package com.cr0mbly.whereshouldibuy;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import com.cr0mbly.whereshouldibuy.filters.JwtFilter;
import com.cr0mbly.whereshouldibuy.services.interfaces.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WhereshouldibuyApplication{

	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/user/profile/*");

		return registrationBean;
	}

	public static void main(String[] args) {
		SpringApplication.run(WhereshouldibuyApplication.class, args);
	}
}
