package com.example.module3.controller.admin;

import com.example.module3.model.dto.request.CreatePolicyRequest;
import com.example.module3.model.dto.request.UpdatePolicyContractRequest;
import com.example.module3.model.dto.response.PolicyResponse;
import com.example.module3.service.PolicyContractsImpl.PolicyContractsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class PolicyContractController {
    private final PolicyContractsService policyContractsService;

    @PostMapping("/policy_contract")
    public ResponseEntity<PolicyResponse> createPolicy(@RequestBody CreatePolicyRequest request) {
        return ResponseEntity.ok(policyContractsService.createPolicy(request));
    }

    @GetMapping("/policy_contracts")
    public ResponseEntity<List<PolicyResponse>> getAllPolicies() {
        return ResponseEntity.ok(policyContractsService.getAllPolicies());
    }

    @GetMapping("/policy_contract/{id}")
    public ResponseEntity<PolicyResponse> getPolicyContract(@PathVariable Long id) {
        return ResponseEntity.ok(policyContractsService.getPolicyById(id));
    }

    @PutMapping("/policy_contract/{id}")
    public ResponseEntity<PolicyResponse> updatePolicyContract(@PathVariable Long id,
                                                                       @RequestBody UpdatePolicyContractRequest request) {
        PolicyResponse updatedContract = policyContractsService.updatePolicyContract(id, request);
        return ResponseEntity.ok(updatedContract);
    }

    @DeleteMapping("/policy_contract/{id}")
    public ResponseEntity<Void> deletePolicyContract(@PathVariable Long id) {
        policyContractsService.deletePolicyContract(id);
        return ResponseEntity.noContent().build();
    }

}
