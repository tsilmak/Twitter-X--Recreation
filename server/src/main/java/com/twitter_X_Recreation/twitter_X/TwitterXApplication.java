package com.twitter_X_Recreation.twitter_X;

import com.twitter_X_Recreation.twitter_X.models.ApplicationUser;
import com.twitter_X_Recreation.twitter_X.models.Role;
import com.twitter_X_Recreation.twitter_X.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import com.twitter_X_Recreation.twitter_X.repositories.RoleRepository;
import com.twitter_X_Recreation.twitter_X.repositories.UserRepository;

import java.util.HashSet;
import java.util.Optional;

@SpringBootApplication
public class TwitterXApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwitterXApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserService userService) {
		return args -> {
			Optional<Role> userRole = roleRepository.findRoleByAuthority("USER");
			if (userRole.isEmpty()) {
				Role role = new Role();
				role.setAuthority("USER");
				roleRepository.save(role);
			}

			/*ApplicationUser user = new ApplicationUser();
			user.setFirstName("Test");
			user.setLastName("User");
			user.setUsername("testUser");

			userService.registerUser(user);*/
		};
	}
}

