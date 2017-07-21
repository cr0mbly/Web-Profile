package com.cr0mbly.whereshouldibuy;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.Roles;
import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import com.cr0mbly.whereshouldibuy.filters.JwtFilter;
import com.cr0mbly.whereshouldibuy.repository.UserLoginRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("file:application.properties")
public class WhereshouldibuyApplication implements CommandLineRunner {

	@Autowired
	UserLoginRepo userLoginRepo;

	@Value("${admin.user.login}")
	private String adminLogin;

	@Value("${admin.user.firstName}")
	private String adminFirstName;

	@Value("${admin.user.lastName")
	private String adminLastName;

	@Value("${admin.user.email}")
	private String adminEmail;

	@Value("${admin.user.password}")
	private String adminPassword;

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

	@Override
	public void run(String... args) throws Exception {
		if(userLoginRepo.findByUserRole("admin") == null){
			User adminUser = new User(adminLogin,adminFirstName, adminLastName,adminEmail, adminPassword,  Roles.ADMIN, false);
			userLoginRepo.save(adminUser);
		}
	}
}
