package com.example.module3.service.PolicyContractsImpl;

import com.example.module3.exception.EntityNotFoundException;
import com.example.module3.model.dto.request.*;
import com.example.module3.model.dto.response.*;
import com.example.module3.model.entity.*;
import com.example.module3.repository.*;
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
    private final PropertiesRepository propertiesRepository;

    @Transactional
    public PolicyResponse createPolicy(CreatePolicyRequest request) {
        // Verify all entities exist before creating relationships
        CustomerEntity customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with id: " + request.getCustomerId()));

        UsersEntity user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + request.getUserId()));

        PremiumEntity premium = premiumRepository.findById(request.getPremiumId())
                .orElseThrow(() -> new EntityNotFoundException("Premium not found with id: " + request.getPremiumId()));

        InsuranceProductsEntity insuranceProduct = insuranceProductsRepository.findById(request.getInsuranceProductId())
                .orElseThrow(() -> new EntityNotFoundException("Insurance Product not found with id: " + request.getInsuranceProductId()));

        PropertiesEntity property = propertiesRepository.findById(request.getPropertyId())
                .orElseThrow(() -> new EntityNotFoundException("Property not found with id: " + request.getPropertyId()));

        // Create the policy with verified entities
        PolicyContractsEntity policy = new PolicyContractsEntity();
        policy.setCustomer(customer);
        policy.setUser(user);
        policy.setPremium(premium);
        policy.setProperty(property);
        policy.setInsuranceProduct(insuranceProduct);
        policy.setCoverageAmount(request.getCoverageAmount());
        policy.setPolicyStartDate(request.getPolicyStartDate());
        policy.setPolicyEndDate(request.getPolicyEndDate());
        policy.setFrequency(request.getFrequency());
        policy.setPaymentSchedule(request.getPaymentSchedule());
        policy.setExclusions(request.getExclusions());

        PolicyContractsEntity savedPolicy = policyContractsRepository.save(policy);

        // Update premium's policy reference
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

    public PolicyResponse getPolicyById(Long id) {
        PolicyContractsEntity policy = policyContractsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Policy Contract not found"));
        return mapToPolicyResponse(policy);
    }

    @Transactional
    public PolicyResponse updatePolicyContract(Long id, UpdatePolicyContractRequest request) {
        PolicyContractsEntity contract = policyContractsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Policy Contract not found"));

        // Only update entities if the IDs are provided and exist in the database
        if (request.getCustomerId() != null) {
            CustomerEntity customer = customerRepository.findById(request.getCustomerId())
                    .orElseThrow(() -> new EntityNotFoundException("Customer not found with id: " + request.getCustomerId()));
            contract.setCustomer(customer);
        }

        if (request.getUserId() != null) {
            UsersEntity user = userRepository.findById(request.getUserId())
                    .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + request.getUserId()));
            contract.setUser(user);
        }

        if (request.getPremiumId() != null) {
            // Check if premium exists first
            PremiumEntity premium = premiumRepository.findById(request.getPremiumId())
                    .orElseThrow(() -> new EntityNotFoundException("Premium not found with id: " + request.getPremiumId()));
            contract.setPremium(premium);
        }

        if (request.getInsuranceProductId() != null) {
            InsuranceProductsEntity product = insuranceProductsRepository.findById(request.getInsuranceProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Insurance Product not found with id: " + request.getInsuranceProductId()));
            contract.setInsuranceProduct(product);
        }

        if (request.getPropertyId() != null) {
            PropertiesEntity property = propertiesRepository.findById(request.getPropertyId())
                    .orElseThrow(() -> new EntityNotFoundException("Property not found with id: " + request.getPropertyId()));
            contract.setProperty(property);
        }

        // Update other fields if they are provided
        if (request.getCoverageAmount() != null) {
            contract.setCoverageAmount(request.getCoverageAmount());
        }
        if (request.getPolicyStartDate() != null) {
            contract.setPolicyStartDate(request.getPolicyStartDate());
        }
        if (request.getPolicyEndDate() != null) {
            contract.setPolicyEndDate(request.getPolicyEndDate());
        }
        if (request.getFrequency() != null) {
            contract.setFrequency(request.getFrequency());
        }
        if (request.getPaymentSchedule() != null) {
            contract.setPaymentSchedule(request.getPaymentSchedule());
        }
        if (request.getExclusions() != null) {
            contract.setExclusions(request.getExclusions());
        }

        policyContractsRepository.save(contract);
        return new PolicyResponse(contract);
    }

    @Transactional
    public void deletePolicyContract(Long id) {
        // verify the policy exists
        PolicyContractsEntity contract = policyContractsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Policy Contract not found"));

        // unlink all premiums from this policy
        policyContractsRepository.unlinkPremiums(id);

        // delete the policy with direct SQL to bypass validation
        policyContractsRepository.deleteByIdNative(id);
    }


    private PolicyResponse mapToPolicyResponse(PolicyContractsEntity policy) {
        return new PolicyResponse(
                policy.getId(),
                policy.getCustomer() != null ? policy.getCustomer().getId() : null,
                policy.getUser() != null ? policy.getUser().getId() : null,
                policy.getPremium() != null ? policy.getPremium().getId() : null,
                policy.getProperty() != null ? policy.getProperty().getPropertyId() : null,
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