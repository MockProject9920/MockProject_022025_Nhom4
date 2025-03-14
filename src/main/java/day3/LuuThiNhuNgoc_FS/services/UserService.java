package day3.LuuThiNhuNgoc_FS.services;

import day3.LuuThiNhuNgoc_FS.entities.User;
import day3.LuuThiNhuNgoc_FS.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
