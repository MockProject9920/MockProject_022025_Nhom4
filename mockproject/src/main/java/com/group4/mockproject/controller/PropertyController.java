package com.group4.mockproject.controller;

import com.group4.mockproject.dto.request.CreateProperty;
import com.group4.mockproject.dto.response.ApiResponse;
import com.group4.mockproject.exception.ResourceNotFoundException;
import com.group4.mockproject.service.PropertyService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/new")
    public ResponseEntity<ApiResponse> createNewProperty(@Valid @RequestBody CreateProperty request){
        try{
            return ResponseEntity.ok(new ApiResponse("Property created successfully", propertyService.createProperty(request)));
        } catch (Exception e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @GetMapping("/{propertyId}")
    public ResponseEntity<ApiResponse> getPropertyById(@PathVariable Long propertyId){
        try{
            return ResponseEntity.ok(new ApiResponse("Property found!", propertyService.getPropertyById(propertyId)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @PutMapping("/{propertyId}/update")
    public ResponseEntity<ApiResponse> updateProperty(@PathVariable Long propertyId, @Valid @RequestBody CreateProperty request){
        try{
            return ResponseEntity.ok(new ApiResponse("Property updated successfully!", propertyService.updateProperty(propertyId, request)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @DeleteMapping("/{propertyId}")
    public ResponseEntity<ApiResponse> deleteProperty(@PathVariable Long propertyId){
        try{
            propertyService.deletePropertyById(propertyId);
            return ResponseEntity.ok(new ApiResponse("Property deleted successfully!", null));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }
}
