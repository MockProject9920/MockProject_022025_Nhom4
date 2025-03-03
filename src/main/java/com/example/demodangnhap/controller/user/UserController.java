package com.example.demodangnhap.controller.user;

import com.example.demodangnhap.model.DAO.UserRequest;
import com.example.demodangnhap.model.entity.UsersEntity;
import com.example.demodangnhap.service.UserService;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserRequest userRequest) {
        UsersEntity user = userService.findUserByUserName(userRequest.getUsername());

        if (user == null || !user.getPassword().equals(userRequest.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Tên đăng nhập hoặc mật khẩu không đúng.");
        }

        return ResponseEntity.ok("Đăng nhập thành công!");
    }

}
