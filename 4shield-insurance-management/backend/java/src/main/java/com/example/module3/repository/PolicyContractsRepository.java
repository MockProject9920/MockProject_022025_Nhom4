package com.example.module3.repository;

import com.example.module3.model.entity.PolicyContractsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PolicyContractsRepository extends JpaRepository<PolicyContractsEntity, Long> {
    @Modifying
    @Query(value = "UPDATE bds.premium SET policy_id = NULL WHERE policy_id = :policyId", nativeQuery = true)
    void unlinkPremiums(@Param("policyId") Long policyId);

    @Modifying
    @Query(value = "DELETE FROM bds.policy_contracts WHERE id = :id", nativeQuery = true)
    void deleteByIdNative(@Param("id") Long id);
}
