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
    public User saveUser(User user) {
        User UserToSave= new User(
                idService.generateId(),
                user.getName(),
                argon2Service.encode(user.getPassword()),
                user.getEmail(),
                new Car(idService.generateId(),
                        "picture",
                        "description",
                        List.of(new TuningPart(idService.generateId(),"name","url"))
                )
        );

        userRepo.save(UserToSave);

        return new User(
                idService.generateId(),
                UserToSave.getName(),
                "***",
                UserToSave.getEmail(),
                UserToSave.getCar()
        );
    }

    public Optional<User> getUserByName(String name){
        return userRepo.findByName(name);
    }

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public Optional<User> getUserById(String id){
        return userRepo.findById(id);
    }

    public User updateUser(User user){
        return userRepo.save(user);
    }
}
