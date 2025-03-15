package com.twitter_X_Recreation.twitter_X.controllers;

import com.twitter_X_Recreation.twitter_X.dto.UpdatePhoneRequest;
import com.twitter_X_Recreation.twitter_X.exceptions.*;
import com.twitter_X_Recreation.twitter_X.models.ApplicationUser;
import com.twitter_X_Recreation.twitter_X.models.RegistrationObject;
import com.twitter_X_Recreation.twitter_X.services.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final UserService userService;

    @Autowired
    public AuthenticationController(UserService userService){
        this.userService = userService;
    }

    @ExceptionHandler({EmailAlreadyTakenException.class})
    public ResponseEntity<String> handleEmailTaken(){
        return new ResponseEntity<String>("The email you provided is already in use", HttpStatus.CONFLICT);    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationObject registrationObject) {
        try {
            ApplicationUser user = userService.registerUser(registrationObject);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (EmailAlreadyTakenException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @ExceptionHandler({UserDoesNotExistException.class})
    public ResponseEntity<String> handleUserDoesNotExist() {
        return new ResponseEntity<>("The user does not exist", HttpStatus.NOT_FOUND);
    }

    @PutMapping("/update/phone")
    //with dto
    public ResponseEntity<ApplicationUser> updatePhoneNumber(@RequestBody UpdatePhoneRequest phoneUpdateRequest) {
        ApplicationUser applicationUser = userService.getUserByUsername(phoneUpdateRequest.getUsername());
        applicationUser.setPhoneNumber(phoneUpdateRequest.getPhoneNumber());
        ApplicationUser updatedUser = userService.updateUser(applicationUser);
        return ResponseEntity.ok(updatedUser);
    }

    @ExceptionHandler({EmailFailedToSendException.class})
    public ResponseEntity<String> handleFailedEmail(){
        return new ResponseEntity<String>("Email failed to send, try again in a moment", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/email/code")
    //without dto
    public ResponseEntity<String> createEmailVerificationCode(@RequestBody LinkedHashMap<String, String> body){
        userService.generateEmailVerificationCode(body.get("username"));

        return new ResponseEntity<String>("Verification code generated, email was sent", HttpStatus.OK);
    }

    @ExceptionHandler({IncorrectVerificationCodeException.class})
    public ResponseEntity<String> incorrectCodeHandler(){
        return new ResponseEntity<String>("The code provided is incorrect, please try again.", HttpStatus.CONFLICT);
    }
    @ExceptionHandler({VerificationCodeExpiredException.class})
    public ResponseEntity<String> codeExpiredHandler(){
        return new ResponseEntity<String>("The code provided has expired, please ask for a new one.", HttpStatus.CONFLICT);
    }
    @PostMapping("/email/code/verify")
    public ApplicationUser verifyEmailCode(@RequestBody LinkedHashMap<String, String> body){

        Long code =Long.parseLong(body.get("code"));

        String username = body.get("username");

        return userService.verifyEmail(username, code);
    }

    @PutMapping("/update/password")
    public ApplicationUser updatePassword(@RequestBody LinkedHashMap<String, String> body){
        String username = body.get("username");
        String password = body.get("password");

        return userService.setPassword(username, password);
    }

}
