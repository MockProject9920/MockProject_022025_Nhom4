package com.example.module3.service.InsuranceProductsImpl;

import com.example.module3.model.dto.request.InsuranceProductsDto;
import com.example.module3.model.entity.InsuranceProductsEntity;

import java.util.List;
import java.util.Optional;

public interface InsuranceProductsService {
    InsuranceProductsEntity createInsuranceDetail(InsuranceProductsDto insuranceProductsDto);
    List<InsuranceProductsEntity> getAllInsuranceDetails();
    Optional<InsuranceProductsEntity> getInsuranceDetailById(Long insuranceProductId);
    InsuranceProductsEntity updateInsuranceDetail(Long insuranceProductId, InsuranceProductsDto insuranceProductsDto);
    void deleteInsuranceDetail(Long insuranceProductId);
}
