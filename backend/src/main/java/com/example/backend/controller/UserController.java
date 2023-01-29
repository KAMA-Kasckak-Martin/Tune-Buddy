package com.example.backend.controller;

import com.example.backend.models.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import com.example.backend.service.UserService;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public String helloMe(Principal principal){
        if(principal !=null){
            return principal.getName();
        }
        return "anonymousUser";
    }


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable String id){
        return userService.getUserById(id);
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
    @PostMapping("/login")
    public Object login() {
        return userService.getUserByName(SecurityContextHolder.getContext().getAuthentication().getName());
    }

    @PutMapping("/{id}")
    public User addCar(@PathVariable String id, @RequestBody User user) {
        User userData = userService.getUserById(id).orElseThrow(() -> new UsernameNotFoundException(id + " user not found!"));
        userData.setCar(user.getCar());
        return userService.updateUser(userData);
    }

    @PostMapping("logout")
    public String logout(HttpSession httpSession) {
        httpSession.invalidate();
        SecurityContextHolder.clearContext();
        return "anonymousUser";
    }
}
