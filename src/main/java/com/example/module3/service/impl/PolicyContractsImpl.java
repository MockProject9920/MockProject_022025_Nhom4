package com.example.module3.service.impl;

import com.example.module3.model.entity.PolicyContractsEntity;
import com.example.module3.repository.PolicyContractsRepository;
import com.example.module3.service.PolicyContractsService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PolicyContractsImpl implements PolicyContractsService {

    private final   PolicyContractsRepository policyContractsRepository;

    @Autowired
    public PolicyContractsImpl(PolicyContractsRepository policyContractsRepository){
        this.policyContractsRepository = policyContractsRepository;
    }

    @Override
    public List<PolicyContractsEntity> getAll() {
        return policyContractsRepository.findAll();
    }
}
