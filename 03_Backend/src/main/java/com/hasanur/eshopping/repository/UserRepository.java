package com.hasanur.eshopping.repository;

import com.hasanur.eshopping.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  UserRepository extends JpaRepository<User,Integer> {

}
