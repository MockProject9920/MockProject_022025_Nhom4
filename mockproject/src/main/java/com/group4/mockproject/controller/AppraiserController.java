package com.group4.mockproject.controller;

import com.group4.mockproject.dto.request.CreateAppraiser;
import com.group4.mockproject.dto.request.CreateAppraiserRequest;
import com.group4.mockproject.dto.response.ApiResponse;
import com.group4.mockproject.exception.ResourceNotFoundException;
import com.group4.mockproject.model.Appraiser;
import com.group4.mockproject.service.AppraiserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@RestController
@RequestMapping("/appraiser")
@AllArgsConstructor
public class AppraiserController {

    @Autowired
    private final AppraiserService appraiserService;

    @GetMapping("/list")
    public ResponseEntity<ApiResponse> getAllAppraisers() {
        return ResponseEntity.ok(new ApiResponse("All appraisers", appraiserService.getAllPraisers()));
    }

    @PostMapping("/new")
    public ResponseEntity<ApiResponse> createNewAppraiser(@Valid @RequestBody CreateAppraiser request) {
        return ResponseEntity.ok(new ApiResponse("Appraiser created successfully", appraiserService.createAppraiser(request)));
    }

    @GetMapping("/{appraiserId}")
    public ResponseEntity<ApiResponse> getAppraiserById(@PathVariable Long appraiserId) {
        return ResponseEntity.ok(new ApiResponse("Appraiser found!", appraiserService.findAppraiserById(appraiserId)));
    }

    @PutMapping("/{appraiserId}/update")
    public ResponseEntity<ApiResponse> updateAppraiser(@PathVariable Long appraiserId, @Valid @RequestBody CreateAppraiser request) {
        return ResponseEntity.ok(new ApiResponse("Appraiser updated successfully!", appraiserService.updateAppraiser(appraiserId, request)));
    }

    @DeleteMapping("/{appraiserId}")
    public ResponseEntity<ApiResponse> deleteAppraiser(@PathVariable Long appraiserId) {
        appraiserService.deleteAppraiserById(appraiserId);
        return ResponseEntity.ok(new ApiResponse("Deleted successfully!", null));
    }

    @GetMapping("/request-list")
    public ResponseEntity<ApiResponse> getAllAppraiserRequests(
            @RequestParam(required = false) String requestType,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortByable
    ) {
        if (requestType != null) {
            return ResponseEntity.ok(new ApiResponse("Get All Appraiser Requests", appraiserService.getAppraiserRequestsByRequestType(requestType, page, size, sortByable)));
        }
        return ResponseEntity.ok(new ApiResponse("Get All Appraiser Requests", appraiserService.getAllAppraiserRequests(page, size, sortByable)));
    }

    @GetMapping("/appraisal-report-list")
    public ResponseEntity<ApiResponse> getAllAppraisalReports(
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "appraisalDate") String sortByable
    ) {
        if (status != null) {
            return ResponseEntity.ok(new ApiResponse("Get All Appraiser Requests", appraiserService.getAppraisalReportsByStatus(status, page, size, sortByable)));
        }
        return ResponseEntity.ok(new ApiResponse("Get All Appraiser Requests", appraiserService.getAllAppraisalReports(page, size, sortByable)));
    }

    @GetMapping("/request/{appraiserRequestId}")
    public ResponseEntity<ApiResponse> getAppraiserRequestById(@PathVariable Long appraiserRequestId) {
        try {
            return ResponseEntity.ok(new ApiResponse("Appraiser Request found!", appraiserService.findAppraiserRequestById(appraiserRequestId)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @GetMapping("/active-list")
    public ResponseEntity<List<Appraiser>> getActiveAppraisers() {
        List<Appraiser> activeAppraisers = appraiserService.getActiveAppraisers();
        return ResponseEntity.ok(activeAppraisers);
    }

    @PutMapping("/request/{appraiserRequestId}/update")
    public ResponseEntity<ApiResponse> updateAppraiserRequest(@PathVariable Long appraiserRequestId, @Valid @RequestBody CreateAppraiserRequest request) {
        try {
            return ResponseEntity.ok(new ApiResponse("Appraiser Request updated successfully!", appraiserService.updateAppraiserRequest(appraiserRequestId, request)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @PutMapping("/request/{appraiserRequestId}/approve")
    public ResponseEntity<ApiResponse> approveAppraiserRequest(@PathVariable Long appraiserRequestId) {
        try {
            return ResponseEntity.ok(new ApiResponse("Appraiser Request assigned successfully!", appraiserService.approveAppraiserRequest(appraiserRequestId)));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }

    @PutMapping("/request/{appraiserRequestId}/reject")
    public ResponseEntity<ApiResponse> rejectAppraiserRequest(@PathVariable Long appraiserRequestId) {
        try {
            return ResponseEntity.ok(new ApiResponse("Appraiser Request rejected successfully!", appraiserService.rejectAppraiserRequest(appraiserRequestId)));
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
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage(), null));
        }
    }
}