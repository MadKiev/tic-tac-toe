package com.gmail.madkiev.service;

import com.gmail.madkiev.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}