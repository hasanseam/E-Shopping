package com.hasanur.eshopping.restController;

import com.hasanur.eshopping.entity.User;
import com.hasanur.eshopping.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userServices){
        this.userService = userServices;
    }
    @GetMapping("/users")
    public List<User> getAllEmployees(){
        return userService.findAll();
    }

    @GetMapping("/users/{userId}")
    public User getEmployeeById(@PathVariable int userId){
        User user = userService.findById(userId);
        if(user==null){
            throw new RuntimeException("No User");
        }
        return user;
    }

    @PostMapping("/users")
    public User saveEmployee(@RequestBody User user){
        //so that the function will create a new employee instead of merge
        user.setId(0);
        User userdb = userService.save(user);
        return userdb;
    }

    @PutMapping("/users")
    public User updateEmployee(@RequestBody User user){
        User userdb = userService.save(user);
        return userdb;
    }

    @DeleteMapping("/users/{userId}")
    public String deleteEmployee(@PathVariable int userId){
        User user = userService.findById(userId);
        if(user==null){
            throw new RuntimeException("There is not user with this id");
        }else {
            userService.deleteById(userId);
            return "deleted";
        }
    }
}

