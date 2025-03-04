package day3.LuuThiNhuNgoc_FS.controller;

import day3.LuuThiNhuNgoc_FS.entities.User;
import day3.LuuThiNhuNgoc_FS.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class AuthController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String loginPage() {
        return "sign-in";
    }

}
