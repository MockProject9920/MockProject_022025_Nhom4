package com.group4.mockproject.controller;

import com.group4.mockproject.dto.request.CreateAppraiser;
import com.group4.mockproject.dto.request.CreateProperty;
import com.group4.mockproject.dto.response.ApiResponse;
import com.group4.mockproject.exception.ResourceNotFoundException;
import com.group4.mockproject.service.AppraiserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@RestController
@RequestMapping("/appraiser")
@AllArgsConstructor
public class AppraiserController {

    @Autowired
    private final AppraiserService appraiserService;

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getAllAppraisers(){
        try {
            return ResponseEntity.ok(new ApiResponse("All appraisers ", appraiserService.getAllPraisers()));
        } catch (Exception e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @PostMapping("/new")
    public ResponseEntity<ApiResponse> createNewAppraiser(@Valid @RequestBody CreateAppraiser request){
        try{
            return ResponseEntity.ok(new ApiResponse("Appraiser created successfully", appraiserService.createAppraiser(request)));
        } catch (Exception e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @GetMapping("/{appraiserId}")
    public ResponseEntity<ApiResponse> getAppraiserById(@PathVariable Long appraiserId){
        try{
            return ResponseEntity.ok(new ApiResponse("Appraiser found!", appraiserService.findAppraiserById(appraiserId)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @PutMapping("/{appraiserId}/update")
    public ResponseEntity<ApiResponse> updateAppraiser(@PathVariable Long appraiserId, @Valid @RequestBody CreateAppraiser request){
        try{
            return ResponseEntity.ok(new ApiResponse("Appraiser updated successfully!", appraiserService.updateAppraiser(appraiserId, request)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @DeleteMapping("/{appraiserId}")
    public ResponseEntity<ApiResponse> deleteAppraiser(@PathVariable Long appraiserId){
        try{
            appraiserService.deleteAppraiserById(appraiserId);
            return ResponseEntity.ok(new ApiResponse("Deleted successfully!", null));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

}
