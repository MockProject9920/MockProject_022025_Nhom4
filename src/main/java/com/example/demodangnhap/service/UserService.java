package com.example.demodangnhap.service;

//import org.springframework.security.core.userdetails.UserDetailsService;

import com.example.demodangnhap.model.entity.UsersEntity;

public interface UserService {
    UsersEntity findUserByUserName(String username);
}
