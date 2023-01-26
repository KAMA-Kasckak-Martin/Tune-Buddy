package com.example.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
public record User(
        @Id
        String id,
        String name,
        String password,
        String email,
        Car car
) {
}
