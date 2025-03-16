package com.twitter_X_Recreation.twitter_X.services;

import com.twitter_X_Recreation.twitter_X.exceptions.*;
import com.twitter_X_Recreation.twitter_X.models.ApplicationUser;
import com.twitter_X_Recreation.twitter_X.models.RegistrationObject;
import com.twitter_X_Recreation.twitter_X.models.Role;
import com.twitter_X_Recreation.twitter_X.repositories.RoleRepository;
import com.twitter_X_Recreation.twitter_X.repositories.UserRepository;
import com.twitter_X_Recreation.twitter_X.utils.EmailTemplateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    private final EmailSenderService emailSenderService;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository, EmailSenderService emailSenderService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.emailSenderService = emailSenderService;
        this.passwordEncoder = passwordEncoder;
    }

    public ApplicationUser getUserByUsername(String username){
        return  userRepository.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
    }



    public ApplicationUser updateUser(ApplicationUser applicationUser){
        try{
            return userRepository.save(applicationUser);
        } catch (Exception e) {
            throw new EmailAlreadyTakenException();
        }
    }

    @Transactional
    public ApplicationUser registerUser(RegistrationObject registrationObject) {
        // Check if email already exists
        Optional<ApplicationUser> existingUser = userRepository.findByEmail(registrationObject.getEmail());
        if (existingUser.isPresent()) {
            throw new EmailAlreadyTakenException();
        }

        ApplicationUser applicationUser = new ApplicationUser();
        applicationUser.setName(registrationObject.getName());
        applicationUser.setEmail(registrationObject.getEmail());
        applicationUser.setBirthDate(registrationObject.getBirthDate());

        String name = applicationUser.getName();

        // Loop until a unique username is found
        boolean isNameTaken = true;
        String temporaryName = "";
        while (isNameTaken) {
            temporaryName = generateUsername(name);
            if (userRepository.findByUsername(temporaryName).isEmpty()) {
                isNameTaken = false;
            }
        }
        applicationUser.setUsername(temporaryName);

        Set<Role> roles = applicationUser.getAuthorities();
        Optional<Role> userRole = roleRepository.findRoleByAuthority("USER");
        roles.add(userRole.get());

        applicationUser.setAuthorities(roles);


        // Save the user
        return userRepository.save(applicationUser);
    }

    public void generateEmailVerificationCode(String username) {
        ApplicationUser applicationUser = getUserByUsername(username);

        applicationUser.setVerification(generateVerificationNumber());

        applicationUser.setVerificationExpiryTime(System.currentTimeMillis() + (2 * 60 * 60 * 1000));   // 2 hours expiration

        // send the verification code through email
        try {
            String htmlBody = EmailTemplateUtil.getVerificationEmail(String.valueOf(applicationUser.getVerification()));

            emailSenderService.sendEmail(applicationUser.getEmail(), applicationUser.getVerification() + " is your X verification code", htmlBody);
            userRepository.save(applicationUser);
        } catch (Exception e) {
            throw new EmailFailedToSendException(e);
        }
    }
    public ApplicationUser verifyEmail(String username, Long code) {
        ApplicationUser applicationUser = getUserByUsername(username);

        if (applicationUser.getVerificationExpiryTime() == null || System.currentTimeMillis() > applicationUser.getVerificationExpiryTime()) {
            throw new VerificationCodeExpiredException();
        }

        if (code.equals(applicationUser.getVerification())) {
            applicationUser.setEnabled(true);
            applicationUser.setVerification(null);
            applicationUser.setVerificationExpiryTime(null);
            return userRepository.save(applicationUser);
        } else {
            throw new IncorrectVerificationCodeException();
        }
    }

    public ApplicationUser setPassword(String username, String password) {

        ApplicationUser applicationUser = getUserByUsername(username);

        String encodedPassword = passwordEncoder.encode(password);

        applicationUser.setPassword(encodedPassword);

        return userRepository.save(applicationUser);
    }

    private String generateUsername(String name) {
        long generatedNumber = (long) Math.floor(Math.random() * 1_000_000_000);
        return name + generatedNumber;
    }

    private Long generateVerificationNumber(){
        return (long) Math.floor(Math.random() * 1_000_000);
    }



}