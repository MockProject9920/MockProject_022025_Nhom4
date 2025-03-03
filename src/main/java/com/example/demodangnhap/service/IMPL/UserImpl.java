package com.example.demodangnhap.service.IMPL;

import com.example.demodangnhap.model.entity.UsersEntity;
import com.example.demodangnhap.responsitory.UserResponsitory;
import com.example.demodangnhap.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserImpl implements UserService {
    private final UserResponsitory userResponsitory;

    @Autowired
    public UserImpl(UserResponsitory userResponsitory){
        this.userResponsitory = userResponsitory;
    }

    @Override
    public UsersEntity findUserByUserName(String username) {
        return userResponsitory.findByUsername(username);
    }



}