package com.example.module3.service.InsuranceProductsImpl;

import com.example.module3.model.dto.request.InsuranceProductsDto;
import com.example.module3.model.entity.InsuranceProductsEntity;
import com.example.module3.repository.InsuranceProductsRepository;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@Service
public class InsuranceProductsImpl implements InsuranceProductsService {

    @Autowired
    private InsuranceProductsRepository insuranceProductsRepository;

    // Create
    public InsuranceProductsEntity createInsuranceDetail(InsuranceProductsDto insuranceProductsDto) {
        InsuranceProductsEntity entity = insuranceProductsDto.convertToEntity();
        return insuranceProductsRepository.save(entity);
    }

    // Read all
    public List<InsuranceProductsEntity> getAllInsuranceDetails() {
        return insuranceProductsRepository.findAll();
    }

    // Read by ID
    public Optional<InsuranceProductsEntity> getInsuranceDetailById(Long id) {
        return insuranceProductsRepository.findById(id);
    }

    // Update
    public InsuranceProductsEntity updateInsuranceDetail(Long id, InsuranceProductsDto insuranceProductsDto) {
        return insuranceProductsRepository.findById(id).map(existingEntity -> {
            existingEntity.setProductName(insuranceProductsDto.getProductName());
            existingEntity.setInsuranceType(insuranceProductsDto.getInsuranceType());
            existingEntity.setCoverageAmount(insuranceProductsDto.getCoverageAmount());
            existingEntity.setPaymentMethod(insuranceProductsDto.getPaymentMethod());
            existingEntity.setStatus(insuranceProductsDto.getStatus());
            return insuranceProductsRepository.save(existingEntity);
        }).orElseThrow(() -> new RuntimeException("Insurance detail not found"));
    }

    // Delete
    public void deleteInsuranceDetail(Long id) {
        insuranceProductsRepository.deleteById(id);
    }
}
