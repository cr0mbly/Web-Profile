package com.cr0mbly.whereshouldibuy.controller;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.Roles;
import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import com.cr0mbly.whereshouldibuy.dataModels.authentication.UserProfile;
import com.cr0mbly.whereshouldibuy.repository.UserLoginRepo;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

/**
 * Created by HoulihanA on 21/07/2017.
 */
@RestController
@RequestMapping
public class ProfileController {

    @Autowired
    UserLoginRepo userLoginRepo;

    @RequestMapping(value = "/profile/{userID}", method = RequestMethod.GET)
    public UserProfile Profile(@PathVariable("userID") String userId) throws Exception {
        User currentUser = userLoginRepo.findByUserID(userId);

        if(!currentUser.getLoggedIn()){
            throw new Exception("user not logged in");
        }


        UserProfile profile = new UserProfile();
        profile.setUserID(currentUser.getUserID());
        profile.setEmail(currentUser.getEmail());
        profile.setFirstName(currentUser.getFirstName());
        profile.setLastName(currentUser.getLastName());
        profile.setRole(currentUser.getRole());
        profile.setPassword("notThePassword");
        return profile;

    }

    @RequestMapping(value = "/profile/{userID}", method = RequestMethod.POST)
    public String updateProfile(@RequestBody UserProfile profile){
        JsonObject returnObj = new JsonObject();
        User currentUser = userLoginRepo.findByUserID(profile.getUserID());

        User updatedUser = new User(profile.getUserID(),profile.getFirstName(),profile.getLastName(),profile.getEmail(),
                currentUser.getPassword(), currentUser.getRole(), currentUser.getLoggedIn());

        userLoginRepo.save(updatedUser);
        returnObj.addProperty("result", "updated User!");
        return returnObj.toString();
    }

    @RequestMapping(value = "/admin/profiles/{userID}", method = RequestMethod.GET)
    public List<UserProfile> adminProfiles(@PathVariable("userID") String userID) throws Exception {
        User currentUser = userLoginRepo.findByUserID(userID);

        if(currentUser == null){
            throw new Exception("invalid user");
        }

        if(currentUser.getRole() != Roles.ADMIN){
            throw new Exception("user is not an administrator");
        }

        return userLoginRepo.grabAllUsers();

    }

    @RequestMapping(value = "/crypto/trackedCoins/{userID}/", method = RequestMethod.POST)
    public  String saveWatchedCoins(@PathVariable("userID") String userID, @RequestBody List<String> savedCoins ) throws Exception {
        JsonObject returnObj = new JsonObject();

        User currentUser = userLoginRepo.findByUserID(userID);

        if(currentUser == null){
            throw new Exception("invalid user");
        }

        currentUser.setSavedCoins(savedCoins);
        userLoginRepo.save(currentUser);

        returnObj.addProperty("result", "coin list updated!");
        return returnObj.toString();

    }

    @RequestMapping(value = "/crypto/trackedCoins/{userID}/", method = RequestMethod.GET)
    public  List<String> saveWatchedCoins(@PathVariable("userID") String userID) throws Exception {

        User currentUser = userLoginRepo.findByUserID(userID);

        if(currentUser == null){
            throw new Exception("invalid user");
        }

        return currentUser.getSavedCoins();


    }
}
