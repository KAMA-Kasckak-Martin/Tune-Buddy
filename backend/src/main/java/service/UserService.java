package service;


import models.User;
import org.springframework.stereotype.Service;
import repo.UserRepo;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public Optional<User> getUserById(String id){
        return userRepo.findById(id);
    }
}
