package com.example.module3.controller.admin;

import com.example.module3.model.dto.request.CreatePolicyRequest;
import com.example.module3.model.dto.response.PolicyResponse;
import com.example.module3.service.PolicyContractsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class PolicyContractController {
    private final PolicyContractsService policyContractsService;

    @PostMapping("/create_policycontract")
    public ResponseEntity<PolicyResponse> createPolicy(@RequestBody CreatePolicyRequest request) {
        return ResponseEntity.ok(policyContractsService.createPolicy(request));
    }

    @GetMapping("/policycontracts")
    public ResponseEntity<List<PolicyResponse>> getAllPolicies() {
        return ResponseEntity.ok(policyContractsService.getAllPolicies());
    }
}
