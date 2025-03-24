package com.group4.mockproject.controller;

import com.group4.mockproject.dto.request.CreateAppraiser;
import com.group4.mockproject.dto.response.ApiResponse;
import com.group4.mockproject.model.Appraiser;
import com.group4.mockproject.service.AppraiserService;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class AppraiserControllerTest {
    @InjectMocks
    private AppraiserController appraiserController;

    @Mock
    private AppraiserService appraiserService;

    private Validator validator;

    @BeforeEach
    void setUp() {
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    @Test
    void testGetAllAppraisers() {
        when(appraiserService.getAllPraisers()).thenReturn(List.of());

        ResponseEntity<ApiResponse> response = appraiserController.getAllAppraisers();

        assertNotNull(response.getBody());
        assertEquals("All appraisers ", response.getBody().getMessage());
    }

    @Test
    void testCreateNewAppraiser() {
        CreateAppraiser request = new CreateAppraiser("John Doe", "johndoe@example.com", "1234567890", "Active", "Certified", "Appraisal Co.", "123456789", 10, "123 Main St");

        Appraiser appraiser = new Appraiser();
        when(appraiserService.createAppraiser(any())).thenReturn(appraiser);

        ResponseEntity<ApiResponse> response = appraiserController.createNewAppraiser(request);

        assertNotNull(response.getBody());
        assertEquals("Appraiser created successfully", response.getBody().getMessage());
    }

    @Test
    void testGetAppraiserById() {
        Long appraiserId = 1L;
        Appraiser appraiser = new Appraiser();
        when(appraiserService.findAppraiserById(appraiserId)).thenReturn(appraiser);

        ResponseEntity<ApiResponse> response = appraiserController.getAppraiserById(appraiserId);

        assertNotNull(response.getBody());
        assertEquals("Appraiser found!", response.getBody().getMessage());
    }

    @Test
    void testUpdateAppraiser() {
        Long appraiserId = 1L;
        CreateAppraiser request = new CreateAppraiser("Updated Name", "updated@example.com", "9876543210", "Inactive", "Expert", "Updated Co.", "987654321", 15, "456 Another St");

        Appraiser updatedAppraiser = new Appraiser();
        when(appraiserService.updateAppraiser(eq(appraiserId), any())).thenReturn(updatedAppraiser);

        ResponseEntity<ApiResponse> response = appraiserController.updateAppraiser(appraiserId, request);

        assertNotNull(response.getBody());
        assertEquals("Appraiser updated successfully!", response.getBody().getMessage());
    }

    @Test
    void testDeleteAppraiser() {
        Long appraiserId = 1L;
        doNothing().when(appraiserService).deleteAppraiserById(appraiserId);

        ResponseEntity<ApiResponse> response = appraiserController.deleteAppraiser(appraiserId);

        assertNotNull(response.getBody());
        assertEquals("Deleted successfully!", response.getBody().getMessage());
    }

    @Test
    void testMissingFields_ShouldFailValidation() {
        CreateAppraiser request = new CreateAppraiser(null, null, null, null, null, null, null, null, null);

        Set<ConstraintViolation<CreateAppraiser>> violations = validator.validate(request);

        assertFalse(violations.isEmpty(), "Expected validation errors for missing fields");
        assertEquals(9, violations.size(), "Should have 9 validation errors");
    }
    @Test
    void testGetAllAppraiserRequests() {
        when(appraiserService.getAllAppraiserRequests(0, 10, "createdAt")).thenReturn(new PageImpl<>(List.of()));
        ResponseEntity<ApiResponse> response = appraiserController.getAllAppraiserRequests(null, 0, 10, "createdAt");

        assertNotNull(response.getBody());
        assertEquals("Get All Appraiser Requests", response.getBody().getMessage());
    }

    @Test
    void testGetAllAppraiserRequests_WithRequestType() {
        when(appraiserService.getAppraiserRequestsByRequestType("urgent", 0, 10, "createdAt")).thenReturn(new PageImpl<>(List.of()));
        ResponseEntity<ApiResponse> response = appraiserController.getAllAppraiserRequests("urgent", 0, 10, "createdAt");

        assertNotNull(response.getBody());
        assertEquals("Get All Appraiser Requests", response.getBody().getMessage());
    }

    @Test
    void testGetAllAppraisalReports() {
        when(appraiserService.getAllAppraisalReports(0, 10, "appraisalDate")).thenReturn(new PageImpl<>(List.of()));
        ResponseEntity<ApiResponse> response = appraiserController.getAllAppraisalReports(null, 0, 10, "appraisalDate");

        assertNotNull(response.getBody());
        assertEquals("Get All Appraiser Requests", response.getBody().getMessage());
    }

    @Test
    void testGetAllAppraisalReports_WithStatus() {
        when(appraiserService.getAppraisalReportsByStatus("approved", 0, 10, "appraisalDate")).thenReturn(new PageImpl<>(List.of()));
        ResponseEntity<ApiResponse> response = appraiserController.getAllAppraisalReports("approved", 0, 10, "appraisalDate");

        assertNotNull(response.getBody());
        assertEquals("Get All Appraiser Requests", response.getBody().getMessage());
    }
}
