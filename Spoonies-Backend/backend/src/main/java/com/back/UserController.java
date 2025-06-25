package com.back;

import java.io.FileInputStream;
import java.net.http.HttpRequest;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.back.Objects.UserData;
import com.back.Repository.UserDataRepository;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseOptions;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;



@RestController
@RequestMapping("/api/userdata")
public class UserController {

    private final UserDataRepository userDataRepo;

    public UserController(UserDataRepository userDataRepo){
        this.userDataRepo = userDataRepo;
    }

    @GetMapping
    public List<UserData> getUserData(HttpServletRequest request) {
        String user = (String) request.getAttribute("uid");
        return userDataRepo.findUserById(user);
    }

    @PostMapping
    public UserData putUserData(@RequestBody UserData data, HttpServletRequest request){
        String user = (String) request.getAttribute("uid");
        data.setUid(user);
        return userDataRepo.save(data);
    }
}
