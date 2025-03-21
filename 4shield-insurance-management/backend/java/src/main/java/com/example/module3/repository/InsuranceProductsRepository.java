package com.example.module3.repository;

import com.example.module3.model.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceProductsRepository extends JpaRepository<InsuranceProductsEntity, Long> {
}
