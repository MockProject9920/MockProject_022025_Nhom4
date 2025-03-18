package com.group4.mockproject.repository;

import com.group4.mockproject.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    //SC_031
    List<Property> findByCustomerId(Long customerId);
}
