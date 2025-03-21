package com.example.module3.repository;

import com.example.module3.model.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface PremiumRepository extends JpaRepository<PremiumEntity, Long> {
    @Query("SELECT p FROM PremiumEntity p")
    List<PremiumEntity> findAllPremiums();
    @Query("SELECT p FROM PremiumEntity p WHERE p.id = ?1")
    Optional<PremiumEntity> findPremiumById(Long id);
    @Query("SELECT p.id FROM PremiumEntity p")
    List<Long> findAllPremiumIds();
}