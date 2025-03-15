package com.twitter_X_Recreation.twitter_X;

import com.twitter_X_Recreation.twitter_X.models.ApplicationUser;
import com.twitter_X_Recreation.twitter_X.models.RegistrationObject;
import com.twitter_X_Recreation.twitter_X.models.Role;
import com.twitter_X_Recreation.twitter_X.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.twitter_X_Recreation.twitter_X.repositories.RoleRepository;
import com.twitter_X_Recreation.twitter_X.repositories.UserRepository;

import java.sql.Date;
import java.util.Optional;

@SpringBootApplication
public class TwitterXApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwitterXApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, UserService userService) {
		return args -> {
			// Step 1: Create USER and ADMIN roles if they don’t exist
			Optional<Role> userRole = roleRepository.findRoleByAuthority("USER");
			if (userRole.isEmpty()) {
				Role role = new Role();
				role.setAuthority("USER");
				roleRepository.save(role);
				System.out.println("Created USER role");
			}

			Optional<Role> adminRole = roleRepository.findRoleByAuthority("ADMIN");
			if (adminRole.isEmpty()) {
				Role role = new Role();
				role.setAuthority("ADMIN");
				roleRepository.save(role);
				System.out.println("Created ADMIN role");
			}

			// Step 2: Create a default USER if it doesn’t exist
			Optional<ApplicationUser> defaultUser = userRepository.findByEmail("user@example.com");
			if (defaultUser.isEmpty()) {
				RegistrationObject userReg = new RegistrationObject();
				userReg.setFirstName("Default");
				userReg.setLastName("User");
				userReg.setEmail("user@example.com");
				userReg.setBirthDate(Date.valueOf("1995-05-15"));

				userService.registerUser(userReg);
				System.out.println("Created default USER with email: user@example.com");
			}

			// Step 3: Create a default ADMIN if it doesn’t exist
			Optional<ApplicationUser> defaultAdmin = userRepository.findByEmail("admin@example.com");
			if (defaultAdmin.isEmpty()) {
				RegistrationObject adminReg = new RegistrationObject();
				adminReg.setFirstName("Default");
				adminReg.setLastName("Admin");
				adminReg.setEmail("admin@example.com");
				adminReg.setBirthDate(Date.valueOf("1985-01-01")); // Example date, adjust as needed

				ApplicationUser admin = userService.registerUser(adminReg);
				// Since registerUser assigns USER by default, manually add ADMIN role
				admin.getAuthorities().clear(); // Remove USER role
				admin.getAuthorities().add(roleRepository.findRoleByAuthority("ADMIN").get());
				userRepository.save(admin); // Update with ADMIN role
				System.out.println("Created default ADMIN with email: admin@example.com");
			}
		};
	}
}

