package com.twitter_X_Recreation.twitter_X.services;

import com.twitter_X_Recreation.twitter_X.models.ApplicationUser;
import com.twitter_X_Recreation.twitter_X.models.Role;
import com.twitter_X_Recreation.twitter_X.repositories.RoleRepository;
import com.twitter_X_Recreation.twitter_X.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository){
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Transactional
    public ApplicationUser registerUser(ApplicationUser user) {
        Set<Role> roles = user.getAuthorities();
        Optional<Role> userRole = roleRepository.findRoleByAuthority("USER");
        if (userRole.isPresent()) {
            roles.add(userRole.get());
        } else {
            throw new RuntimeException("USER role not found in database");
        }
        user.setAuthorities(roles);
        return userRepository.save(user);
    }

}
