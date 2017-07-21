package com.cr0mbly.whereshouldibuy.controller;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.Roles;
import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import com.cr0mbly.whereshouldibuy.dataModels.authentication.UserLoginCredentials;
import com.cr0mbly.whereshouldibuy.dataModels.authentication.UserProfile;
import com.cr0mbly.whereshouldibuy.repository.UserLoginRepo;
import com.google.gson.JsonObject;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Random;

/**
 * Created by HoulihanA on 12/07/2017.
 */
@RestController
@RequestMapping("/user")
public class CredentialsController {

    @Autowired
    private UserLoginRepo userLoginRepo;

    @Value("${jwt.key}")
    private String  JWTKEY;

    private static final String EMAILREGEX =
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                    + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody UserLoginCredentials login) {
        JsonObject returnObj = new JsonObject();

        if(login.getUserID() == null || login.getPassword() == null){
            return "login not complete";
        }

        String userID = login.getUserID();
        String password = login.getPassword();

        User user = userLoginRepo.findByUserID(userID);

        if(user == null){
            returnObj.addProperty("validLogin",false);
            returnObj.addProperty("message","user not found");
            return returnObj.toString();
        }

        String pwd = user.getPassword();


        if(!password.equals(pwd)){
            returnObj.addProperty("validLogin",false);
            returnObj.addProperty("message","password not valid");
            return returnObj.toString();

        }

        user.setLoggedIn(true);
        userLoginRepo.save(user);

        String jwt =  Jwts.builder().setSubject(userID).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, JWTKEY).compact();

        returnObj.addProperty("jwt", jwt);
        returnObj.addProperty("userID", userID);
        returnObj.addProperty("validLogin",true);
        returnObj.addProperty("roles", user.getRole().toString());
        return  returnObj.toString();
    }

    @RequestMapping(value = "/logout/{userID}", method = RequestMethod.DELETE)
    public void logOut(@PathVariable("userID") String userId){
        User currentUser = userLoginRepo.findByUserID(userId);
        currentUser.setLoggedIn(false);
        userLoginRepo.save(currentUser);
    }
    @RequestMapping(value = "/signUp", method = RequestMethod.POST)
    public String signUp(@RequestBody User user) {
        JsonObject returnObj = new JsonObject();

        if(!(userLoginRepo.findByEmail(user.getUserID()) == null)){
            returnObj.addProperty("validSignup",false);
            returnObj.addProperty("message", "username already taken");
            return returnObj.toString();
        }

        if (!user.getEmail().matches(EMAILREGEX)){
            returnObj.addProperty("validSignup",false);
            returnObj.addProperty("message", "not a valid email");
            return returnObj.toString();
        }

        if(!((userLoginRepo.findByEmail(user.getEmail()))  == null)){
            returnObj.addProperty("validSignup",false);
            returnObj.addProperty("message", "email already in use try resetting password");
            return returnObj.toString();
        }
        user.setLoggedIn(false);
        user.setRole(Roles.USER);
        userLoginRepo.save(user);

        returnObj.addProperty("validSignup",true);
        returnObj.addProperty("redirect", "/profile/" + user.getUserID());
        return returnObj.toString();

    }
}
