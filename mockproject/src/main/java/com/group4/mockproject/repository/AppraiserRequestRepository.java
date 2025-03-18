package com.group4.mockproject.repository;

import com.group4.mockproject.model.AppraiserRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppraiserRequestRepository extends JpaRepository<AppraiserRequest, Long> {
    Page<AppraiserRequest> findByRequestType(String requestType, Pageable pageable);
}
