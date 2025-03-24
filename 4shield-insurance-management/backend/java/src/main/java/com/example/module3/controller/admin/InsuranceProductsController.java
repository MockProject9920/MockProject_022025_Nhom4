package com.example.module3.controller.admin;


import com.example.module3.model.dto.request.InsuranceProductsDto;
import com.example.module3.model.entity.InsuranceProductsEntity;
import com.example.module3.service.InsuranceProductsImpl.InsuranceProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/insurance-details")
public class InsuranceProductsController {

    @Autowired
    private InsuranceProductsService insuranceProductsService;

    // Create
    @PostMapping
    public ResponseEntity<InsuranceProductsEntity> createInsuranceDetail(@RequestBody InsuranceProductsDto insuranceProductsDto) {
        InsuranceProductsEntity createdDetail = insuranceProductsService.createInsuranceDetail(insuranceProductsDto);
        return ResponseEntity.ok(createdDetail);
    }

    // Read all
    @GetMapping
    public ResponseEntity<List<InsuranceProductsEntity>> getAllInsuranceDetails() {
        return ResponseEntity.ok(insuranceProductsService.getAllInsuranceDetails());
    }

    // Read by ID
    @GetMapping("/{id}")
    public ResponseEntity<InsuranceProductsEntity> getInsuranceDetailById(@PathVariable Long id) {
        Optional<InsuranceProductsEntity> detail = insuranceProductsService.getInsuranceDetailById(id);
        return detail.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update
    @PutMapping("/{id}")
    public ResponseEntity<InsuranceProductsEntity> updateInsuranceDetail(@PathVariable Long id, @RequestBody InsuranceProductsDto insuranceProductsDto) {
        try {
            InsuranceProductsEntity updatedDetail = insuranceProductsService.updateInsuranceDetail(id, insuranceProductsDto);
            return ResponseEntity.ok(updatedDetail);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInsuranceDetail(@PathVariable Long id) {
        insuranceProductsService.deleteInsuranceDetail(id);
        return ResponseEntity.noContent().build();
    }
}

