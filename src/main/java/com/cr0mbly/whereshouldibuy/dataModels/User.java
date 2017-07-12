package com.cr0mbly.whereshouldibuy.dataModels;

/**
 * Created by HoulihanA on 12/07/2017.
 */
public class User {

    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public User(String firstName,String lastName,String email,String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

}
