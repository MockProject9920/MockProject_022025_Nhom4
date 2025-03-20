package com.group4.mockproject.repository;

import com.group4.mockproject.model.AppraisalReport;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppraisalReportRepository extends JpaRepository<AppraisalReport, Long> {
    Page<AppraisalReport> findByStatus(String status, Pageable pageable);
}
