package com.cr0mbly.whereshouldibuy.repository;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import com.cr0mbly.whereshouldibuy.dataModels.authentication.UserProfile;
import com.cr0mbly.whereshouldibuy.services.interfaces.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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
    public List<UserProfile> grabAllUsers(){
        List<User> userList = userLoginService.findAll();
        List<UserProfile> profileList = new ArrayList<>(userList.size());
        userList.forEach(user -> profileList.add(new UserProfile(user.getUserID(),user.getFirstName(),user.getLastName(),user.getEmail(),
                user.getRole(),saltyString(user.getPassword().length()))));
        return profileList;

    }
    // TODO move somewhere where multiple classes can use
    private String saltyString(int length) {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < length) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        return salt.toString();

    }
}
