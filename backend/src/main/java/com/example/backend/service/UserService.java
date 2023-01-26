package com.example.backend.service;


import com.example.backend.models.Car;
import com.example.backend.models.TuningPart;
import com.example.backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.repo.UserRepo;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepo;
    private final IdService idService;
    private final Argon2Service argon2Service;

    @Autowired
    public UserService(UserRepo userRepo, IdService idService, Argon2Service argon2Service) {
        this.userRepo = userRepo;
        this.idService = idService;
        this.argon2Service = argon2Service;
    }
    public User saveUser( User user) {
        User UserToSave= new User(
                idService.generateId(),
                user.name(),
                argon2Service.encode(user.password()),
                user.email(),
                new Car("id",
                        "picture",
                        "description",
                        List.of(new TuningPart("id","name","url"))
                        )
        );

        userRepo.save(UserToSave);

        return new User(
                UserToSave.id(),
                UserToSave.name(),
                "***",
                UserToSave.email(),
                UserToSave.car()
        );
    }



    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public Optional<User> geuUserByName(String name){
        return userRepo.findByName(name);
    }

    public Optional<User> getUserById(String id){
        return userRepo.findById(id);
    }

}
