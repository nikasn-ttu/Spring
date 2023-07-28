package com.commerce.eshop;

import com.commerce.eshop.models.user.ApplicationUser;
import com.commerce.eshop.models.user.Role;
import com.commerce.eshop.repository.RoleRepository;
import com.commerce.eshop.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.*;

@SpringBootApplication
public class EShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(EShopApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder encoder){
		 return args -> {
			 if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			 Role adminRole = roleRepository.save(new Role("ADMIN"));
			 roleRepository.save(new Role("USER"));

			 Set<Role> roles = new HashSet<>();
			 roles.add(adminRole);
			 ApplicationUser admin = new ApplicationUser(UUID.randomUUID(),"admin", encoder.encode("password"),roles, "John", "Smith", "+37258221929");
			 userRepository.save(admin);

		 };
	}

}
