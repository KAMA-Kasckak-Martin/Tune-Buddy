package com.example.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.userdetails.UserDetails;

@Document("users")
public class User {

        @Id
        private String id;
        private String name;
        private String password;
        private String email;
        private Car car;

        public User(String id, String name, String password, String email, Car car) {
                this.id = id;
                this.name = name;
                this.password = password;
                this.email = email;
                this.car = car;
        }

        public String getId() {
                return id;
        }

        public String getName() {
                return name;
        }
        public String getPassword() {
                return password;
        }
        public String getEmail() {
                return email;
        }
        public Car getCar() {
                return car;
        }

        public void setName(String name) {
                this.name = name;
        }

        public void setPassword(String password) {
                this.password = password;
        }

        public void setEmail(String email) {
                this.email = email;
        }

        public void setCar(Car car) {
                this.car = car;
        }
}
