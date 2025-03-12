package com.example.module3.controller.admin;

import com.example.module3.service.PolicyContractsService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/api/admin")
public class PolicyContractController {
    private final   PolicyContractsService policyContractsService;

    @Autowired
    public PolicyContractController(PolicyContractsService policyContractsService){
        this.policyContractsService = policyContractsService;
    }

    @GetMapping("/policycontracts")
    public ResponseEntity<?> get(){return new ResponseEntity<>(policyContractsService.getAll(), HttpStatus.OK);}
}
