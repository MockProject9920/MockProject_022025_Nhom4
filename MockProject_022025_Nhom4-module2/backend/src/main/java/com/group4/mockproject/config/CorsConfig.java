package com.group4.mockproject.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Áp dụng CORS cho tất cả các route
                .allowedOrigins("http://localhost:5173") // Cho phép frontend từ origin này
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Cho phép các phương thức HTTP
                .allowCredentials(true); // Cho phép gửi credentials (cookie, token)
    }
}