package com.example.module3.repository;

import com.example.module3.model.entity.CustomerEntity;
import com.example.module3.model.entity.InsuranceProductsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity, Long> {
}
