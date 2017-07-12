package com.cr0mbly.whereshouldibuy.services.interfaces;

import com.cr0mbly.whereshouldibuy.dataModels.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by HoulihanA on 12/07/2017.
 */
public interface MongoDBConnector extends MongoRepository<User, String> {

    public User findByEmail(String email);
}
