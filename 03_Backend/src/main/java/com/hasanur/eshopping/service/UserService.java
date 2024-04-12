package com.hasanur.eshopping.service;

import com.hasanur.eshopping.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {
    List<User> findAll();
    User findById(int id);
    User save(User user);
    void deleteById(int id);
}
