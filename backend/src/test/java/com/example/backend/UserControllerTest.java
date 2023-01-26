package com.example.backend;


import com.example.backend.models.Car;
import com.example.backend.models.TuningPart;
import com.example.backend.models.User;
import com.example.backend.repo.UserRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.springframework.test.web.servlet.MvcResult;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@AutoConfigureMockMvc
@SpringBootTest
public class UserControllerTest {

    @Autowired
    UserRepo userRepo;

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;


    @Test
    @DirtiesContext
    @WithMockUser(username="flo",password = "123456789")
    void helloMeWhenLoggedInExpectStatusOk() throws Exception {
        mockMvc.perform(get("/api/users/me")
                        .with(csrf()))
                .andExpect(status().isOk());
    }

    @Test
    @DirtiesContext
    @WithMockUser(username="flo")
    void login() throws Exception {
        userRepo.save(new User("1", "flo", "123456789", "flo@flo.com",
                new Car("2","picture","description",
                        List.of(new TuningPart("2", "name","shop")))));
         mockMvc.perform(post("/api/users/login").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "username": "flo",
                                    "password": "123456789"
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(content().string("""
                                {"id":"1","name":"flo","password":"123456789","email":"flo@flo.com","car":{"id":"2","img":"picture","description":"description","tuningParts":[{"id":"2","name":"name","shopUrl":"shop"}]}}"""));
    }

    @Test
    @DirtiesContext
    @WithMockUser("flo")
    void logout() throws Exception {
        mockMvc.perform(post("/api/users/logout").with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().string("anonymousUser"));
    }

    @Test
    @DirtiesContext
    void saveUser() throws Exception {
        MvcResult result = mockMvc.perform(post("/api/users/")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "username": "flo",
                                    "password": "123",
                                    "email": "aghb@gjou.com"
                                }
                                """))
                .andExpect(status().isOk())
                .andReturn();
        String content = result.getResponse().getContentAsString();
        User user = objectMapper.readValue(content, User.class);
        assertNotNull(user);
    }






}
