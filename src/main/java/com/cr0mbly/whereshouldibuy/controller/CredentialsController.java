package com.cr0mbly.whereshouldibuy.controller;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import com.cr0mbly.whereshouldibuy.dataModels.authentication.UserLoginCredentials;
import com.cr0mbly.whereshouldibuy.services.interfaces.UserLoginService;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

/**
 * Created by HoulihanA on 12/07/2017.
 */

@RestController
@RequestMapping("/user")
public class CredentialsController {

    @Autowired
    private UserLoginService userService;

    private static final String EMAILREGEX =
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                    + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody UserLoginCredentials login) {

        if(login.getUserID() == null || login.getPassword() == null){
            return "login not complete";
        }

        String userID = login.getUserID();
        String password = login.getPassword();

        User user = userService.findByUserID(userID);

        if(user == null){
            return "user not found";
        }

        String pwd = user.getPassword();


        if(!password.equals(pwd)){
            return "password not valid";

        }

        String jwt =  Jwts.builder().setSubject(userID).claim("roles", "user").setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "SECRETKEY_AIDANPLEASECHANGE").compact();


        return  "{\"jwt\" : \"" + jwt + "\"}";

    }

    @RequestMapping(value = "/signUp", method = RequestMethod.POST)
    public String signUp(@RequestBody User user) {
        JsonObject returnObj = new JsonObject();

        if(!(userService.findByEmail(user.getUserID()) == null)){
            returnObj.addProperty("message", "username already taken");
            return returnObj.toString();
        }

        if (!user.getEmail().matches(EMAILREGEX)){
            returnObj.addProperty("message", "not a valid email");
            return returnObj.toString();
        }

        if(!((userService.findByEmail(user.getEmail()))  == null)){
            returnObj.addProperty("message", "email already in use try resetting password");
            return returnObj.toString();
        }

        if(!user.getPassword().equals(user.getConfirmPassword())){
            returnObj.addProperty("message", "password insconsistant please check to make sure they're matching.");
            return returnObj.toString();
        }

        userService.save(user);

        returnObj.addProperty("message", "logging in.....");
        return returnObj.toString();

    }
}
