package com.cr0mbly.whereshouldibuy.services.interfaces;

import com.cr0mbly.whereshouldibuy.dataModels.authentication.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Created by HoulihanA on 12/07/2017.
 */
@EnableMongoRepositories
public interface UserLoginService extends MongoRepository<User, String> {

    User findByEmail(String email);
    User findByUserID(String userID);

}
