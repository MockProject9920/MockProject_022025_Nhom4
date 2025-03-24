package com.example.module3.controller.admin;

import com.example.module3.model.dto.request.PropertiesDto;
import com.example.module3.model.entity.PropertiesEntity;
import com.example.module3.service.PropertiesImpl.PropertiesService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;



@RestController
@RequestMapping("/api/properties")
public class PropertiesController {

    @Autowired
    private PropertiesService propertiesService;

    // Create
    @PostMapping
    public ResponseEntity<PropertiesEntity> createProperty(@RequestBody PropertiesDto propertiesDto) {
        PropertiesEntity createdProperty = propertiesService.createProperty(propertiesDto);
        return ResponseEntity.ok(createdProperty);
    }

    // Read all
    @GetMapping
    public ResponseEntity<List<PropertiesEntity>> getAllProperties() {
        return ResponseEntity.ok(propertiesService.getAllProperties());
    }

    // Read by ID
    @GetMapping("/{id}")
    public ResponseEntity<PropertiesEntity> getPropertyById(@PathVariable Long id) {
        Optional<PropertiesEntity> property = propertiesService.getPropertyById(id);
        return property.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update
    @PutMapping("/{id}")
    public ResponseEntity<PropertiesEntity> updateProperty(@PathVariable Long id, @RequestBody PropertiesDto propertiesDto) {
        try {
            PropertiesEntity updatedProperty = propertiesService.updateProperty(id, propertiesDto);
            return ResponseEntity.ok(updatedProperty);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProperty(@PathVariable Long id) {
        propertiesService.deleteProperty(id);
        return ResponseEntity.noContent().build();
    }
}
