package com.group4.mockproject.controller;

import com.group4.mockproject.dto.request.CreateAppraiser;
import com.group4.mockproject.dto.request.CreateProperty;
import com.group4.mockproject.dto.response.ApiResponse;
import com.group4.mockproject.exception.ResourceNotFoundException;
import com.group4.mockproject.model.AppraiserRequest;
import com.group4.mockproject.service.AppraiserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@RestController
@RequestMapping("/appraiser")
@AllArgsConstructor
public class AppraiserController {

    @Autowired
    private final AppraiserService appraiserService;

    @GetMapping("/list")
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

    @GetMapping("/request-list")
    public ResponseEntity<ApiResponse> getAllAppraiserRequests(
            @RequestParam(required = false) String requestType,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortByable
    ){
        try{
            if (requestType != null) {
                return ResponseEntity.ok(new ApiResponse("Get All Appraiser Requests", appraiserService.getAppraiserRequestsByRequestType(requestType, page, size, sortByable)));
            }
            return ResponseEntity.ok(new ApiResponse("Get All Appraiser Requests", appraiserService.getAllAppraiserRequests(page, size, sortByable)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @GetMapping("/appraisal-report-list")
    public ResponseEntity<ApiResponse> getAllAppraisalReports(
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "appraisalDate") String sortByable
    ){
        try{
            if (status != null) {
                return ResponseEntity.ok(new ApiResponse("Get All Appraiser Requests", appraiserService.getAppraisalReportsByStatus(status, page, size, sortByable)));
            }
            return ResponseEntity.ok(new ApiResponse("Get All Appraiser Requests", appraiserService.getAllAppraisalReports(page, size, sortByable)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }
    //SC_031
    @GetMapping("/appraisal-report/{appraisalReportId}")
    public ResponseEntity<ApiResponse> getAppraisalReportById(@PathVariable Long appraisalReportId) {
        try {
            return ResponseEntity.ok(new ApiResponse("Appraisal report found!", appraiserService.findAppraisalReportById(appraisalReportId)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }
}
