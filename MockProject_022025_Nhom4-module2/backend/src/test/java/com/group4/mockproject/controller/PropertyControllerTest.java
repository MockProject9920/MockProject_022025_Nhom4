package com.group4.mockproject.controller;

import com.group4.mockproject.dto.request.CreateProperty;
import com.group4.mockproject.dto.response.ApiResponse;
import com.group4.mockproject.model.Property;
import com.group4.mockproject.service.PropertyService;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class PropertyControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private PropertyService propertyService;

    @InjectMocks
    private PropertyController propertyController;
    private Validator validator;
    @BeforeEach
    void setUp() {
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    @Nested
    @DisplayName("Unit Test - PropertyController")
    class UnitTests {

        @Test
        void testGetAllProperties() {
            when(propertyService.getAllProperties()).thenReturn(List.of());
            ResponseEntity<ApiResponse> response = propertyController.getAllProperties();

            assertNotNull(response.getBody());
            assertEquals("All properties ", response.getBody().getMessage());
        }

        @Test
        void testCreateNewProperty() {
            CreateProperty request = new CreateProperty(
                    "House", "123 Main St", "New York", "NY", "10001", "USA",
                    2005, BigDecimal.valueOf(5000), BigDecimal.valueOf(2500),
                    3, BigDecimal.valueOf(2.5), true, "Pool", "Recently renovated",
                    BigDecimal.valueOf(500000), "Available",1L
            );

            Property property = new Property();
            when(propertyService.createProperty(any())).thenReturn(property);

            ResponseEntity<ApiResponse> response = propertyController.createNewProperty(request);
            assertNotNull(response.getBody());
            assertEquals("Property created successfully", response.getBody().getMessage());
        }

        @Test
        void testGetPropertyById() {
            Property property = new Property();
            when(propertyService.getPropertyById(1L)).thenReturn(property);

            ResponseEntity<ApiResponse> response = propertyController.getPropertyById(1L);
            assertNotNull(response.getBody());
            assertEquals("Property found!", response.getBody().getMessage());
        }

        @Test
        void testUpdateProperty() {
            CreateProperty request = new CreateProperty("Updated House", "456 Elm St", "Los Angeles", "CA", "90001", "USA",
                    2010, BigDecimal.valueOf(6000), BigDecimal.valueOf(3000), 4,
                    BigDecimal.valueOf(3.5), true, "Garage", "New flooring",
                    BigDecimal.valueOf(600000), "Available", 1L);

            Property property = new Property();
            when(propertyService.updateProperty(eq(1L), any())).thenReturn(property);

            ResponseEntity<ApiResponse> response = propertyController.updateProperty(1L, request);
            assertNotNull(response.getBody());
            assertEquals("Property updated successfully!", response.getBody().getMessage());
        }

        @Test
        void testDeleteProperty() {
            doNothing().when(propertyService).deletePropertyById(1L);

            ResponseEntity<ApiResponse> response = propertyController.deleteProperty(1L);
            assertNotNull(response.getBody());
            assertEquals("Property deleted successfully!", response.getBody().getMessage());
        }

        @Test
        void testMissingFields_ShouldFailValidation() {
            CreateProperty property = new CreateProperty(null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null,
                    null, null, null);

            Set<ConstraintViolation<CreateProperty>> violations = validator.validate(property);
            assertFalse(violations.isEmpty(), "Expected validation errors for missing fields");
            assertEquals(17, violations.size(), "Should have 17 validation errors");
        }
    }
}
