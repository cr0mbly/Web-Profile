package com.cr0mbly.whereshouldibuy.dataModels.authentication;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * Created by HoulihanA on 12/07/2017.
 */
@Document
public class User {

    @Id
    private String userID;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Roles role;
    private Boolean loggedIn;
    private List<String> savedCoins;

    public User(){}

    public User(String userID, String firstName, String lastName, String email, String password, Roles role, Boolean loggedIn) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.loggedIn = loggedIn;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    public Boolean getLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(Boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public List<String> getSavedCoins() {
        return savedCoins;
    }

    public void setSavedCoins(List<String> savedCoins) {
        this.savedCoins = savedCoins;
    }


}
