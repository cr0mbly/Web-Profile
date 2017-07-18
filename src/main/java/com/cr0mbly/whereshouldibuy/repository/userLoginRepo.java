package com.cr0mbly.whereshouldibuy.repository;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import com.cr0mbly.whereshouldibuy.services.interfaces.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by HoulihanA on 18/07/2017.
 */
@Repository
public class UserLoginRepo {

    @Autowired
    UserLoginService userLoginService;

    public User findByEmail(String email){
        return userLoginService.findByEmail(email);
    }
    public User findByUserID(String userID){
        return userLoginService.findByUserID(userID);
    }

    public void save(User user){
        userLoginService.save(user);
    }
}
