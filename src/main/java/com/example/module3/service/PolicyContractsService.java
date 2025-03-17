package com.example.module3.service;

import com.example.module3.model.dto.request.CreatePolicyRequest;
import com.example.module3.model.dto.request.UpdatePolicyContractRequest;
import com.example.module3.model.dto.response.PolicyResponse;
import com.example.module3.model.entity.PolicyContractsEntity;

import java.util.List;

public interface PolicyContractsService {
    PolicyResponse createPolicy(CreatePolicyRequest request);
    List<PolicyResponse> getAllPolicies();
    PolicyResponse updatePolicyContract(Long id, UpdatePolicyContractRequest request);
    void deletePolicyContract(Long id);
}
