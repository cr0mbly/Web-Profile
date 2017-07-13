package com.cr0mbly.whereshouldibuy.controller;

import com.cr0mbly.whereshouldibuy.dataModels.User;
import com.cr0mbly.whereshouldibuy.services.interfaces.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

/**
 * Created by HoulihanA on 12/07/2017.
 */

@RestController
@RequestMapping("/user")
public class userLoginController {

    @Autowired
    private UserLoginService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody User login) {

        if(login.getEmail() == null || login.getPassword() == null){
            return "login not complete";
        }

        String email = login.getEmail();
        String password = login.getPassword();


        User user = userService.findByEmail(email);

        if(user == null){
            return "user not found";
        }

        String pwd = user.getPassword();


        if(!password.equals(pwd)){
            return "password not valid";

        }

        return Jwts.builder().setSubject(email).claim("roles", "user").setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "SECRETKEY_AIDANPLEASECHANGE").compact();

    }
}
