package com.example.module3.service.impl;

import com.example.module3.model.dto.request.*;
import com.example.module3.model.dto.response.*;
import com.example.module3.model.entity.*;
import com.example.module3.repository.*;
import com.example.module3.service.PolicyContractsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PolicyContractsImpl implements PolicyContractsService {

    private final PolicyContractsRepository policyContractsRepository;
    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;
    private final PremiumRepository premiumRepository;
    private final InsuranceProductsRepository insuranceProductsRepository;

    @Transactional
    public PolicyResponse createPolicy(CreatePolicyRequest request) {
        // Validate that IDs are not null
        if (request.getCustomerId() == null) {
            throw new IllegalArgumentException("Customer ID cannot be null");
        }
        if (request.getUserId() == null) {
            throw new IllegalArgumentException("User ID cannot be null");
        }
        if (request.getPremiumCode() == null) {
            throw new IllegalArgumentException("Premium ID cannot be null");
        }
        if (request.getInsuranceProductId() == null) {
            throw new IllegalArgumentException("Insurance Product ID cannot be null");
        }

        CustomerEntity customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer not found with id: " + request.getCustomerId()));
        UsersEntity user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + request.getUserId()));
        PremiumEntity premium = premiumRepository.findById(request.getPremiumCode())
                .orElseThrow(() -> new RuntimeException("Premium not found with id: " + request.getPremiumCode()));
        InsuranceProductsEntity insuranceProduct = insuranceProductsRepository.findById(request.getInsuranceProductId())
                .orElseThrow(() -> new RuntimeException("Insurance Product not found with id: " + request.getInsuranceProductId()));

        PolicyContractsEntity policy = new PolicyContractsEntity();
        policy.setCustomer(customer);
        policy.setUser(user);
        policy.setPropertyDetails(request.getPropertyDetails());
        policy.setPremium(premium);
        policy.setInsuranceProduct(insuranceProduct);
        policy.setCoverageAmount(request.getCoverageAmount());
        policy.setPolicyStartDate(request.getPolicyStartDate());
        policy.setPolicyEndDate(request.getPolicyEndDate());
        policy.setFrequency(request.getFrequency());
        policy.setPaymentSchedule(request.getPaymentSchedule());
        policy.setExclusions(request.getExclusions());

        PolicyContractsEntity savedPolicy = policyContractsRepository.save(policy);

        // After saving, update the premium's policy reference (if needed)
        premium.setPolicy(savedPolicy);
        premiumRepository.save(premium);

        return mapToPolicyResponse(savedPolicy);
    }

    @Transactional(readOnly = true)
    public List<PolicyResponse> getAllPolicies() {
        List<PolicyContractsEntity> policies = policyContractsRepository.findAll();
        List<PolicyResponse> policyResponses = new ArrayList<>();

        for (PolicyContractsEntity policy : policies) {
            policyResponses.add(mapToPolicyResponse(policy));
        }
        return policyResponses;
    }

    private PolicyResponse mapToPolicyResponse(PolicyContractsEntity policy) {
        return new PolicyResponse(
                policy.getId(),
                policy.getCustomer() != null ? policy.getCustomer().getId() : null,
                policy.getUser() != null ? policy.getUser().getId() : null,
                policy.getPropertyDetails(),
                policy.getPremium() != null ? policy.getPremium().getId() : null,
                policy.getInsuranceProduct() != null ? policy.getInsuranceProduct().getId() : null,
                policy.getCoverageAmount(),
                policy.getPolicyStartDate(),
                policy.getPolicyEndDate(),
                policy.getFrequency(),
                policy.getPaymentSchedule(),
                policy.getExclusions()
        );
    }
}