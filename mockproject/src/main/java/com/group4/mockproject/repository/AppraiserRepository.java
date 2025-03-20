package com.group4.mockproject.repository;

import com.group4.mockproject.model.Appraiser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppraiserRepository extends JpaRepository<Appraiser, Long> {
    List<Appraiser> findByStatus(String status);
}
