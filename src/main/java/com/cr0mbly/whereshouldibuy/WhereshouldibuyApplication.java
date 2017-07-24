package com.cr0mbly.whereshouldibuy;

import com.cr0mbly.whereshouldibuy.filters.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;



@SpringBootApplication
@PropertySource("file:./enviroment/properties/application-local.properties")

public class WhereshouldibuyApplication {

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
