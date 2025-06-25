package com.back.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.back.Objects.UserData;

public interface UserDataRepository extends MongoRepository<UserData, String> {
    List<UserData> findUserById(String uid);
}
