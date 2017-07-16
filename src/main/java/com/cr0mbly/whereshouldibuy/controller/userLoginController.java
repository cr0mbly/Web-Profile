package com.cr0mbly.whereshouldibuy.controller;

import com.cr0mbly.whereshouldibuy.dataModels.User;
import com.cr0mbly.whereshouldibuy.dataModels.UserLoginCredentials;
import com.cr0mbly.whereshouldibuy.services.interfaces.UserLoginService;
import com.google.gson.Gson;
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
//@CrossOrigin(origins = "http://localhost:4200")
public class userLoginController {

    @Autowired
    private UserLoginService userService;

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
}
