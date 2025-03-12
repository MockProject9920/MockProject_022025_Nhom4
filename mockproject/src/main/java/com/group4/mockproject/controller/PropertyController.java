package com.group4.mockproject.controller;

import com.group4.mockproject.dto.response.ApiResponse;
import com.group4.mockproject.service.PropertyService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.EntityResponse;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/properties")
@AllArgsConstructor
public class PropertyController {

    @Autowired
    PropertyService propertyService;

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getAllProperties(){
        try {
            return ResponseEntity.ok(new ApiResponse("All properties ", propertyService.getAllProperties()));
        } catch (Exception e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }
}
