package com.example.module3.repository;

import com.example.module3.model.entity.PolicyContractsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyContractsRepository extends JpaRepository<PolicyContractsEntity, Long> {
    @Modifying
    @Query("DELETE FROM PolicyContractsEntity p WHERE p.id = :id")
    void deleteByIdCustom(@Param("id") Long id);
}
