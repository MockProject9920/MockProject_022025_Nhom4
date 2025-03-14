package com.group4.mockproject.repository;

import com.group4.mockproject.model.Appraiser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppraiserResppository extends JpaRepository<Appraiser, Long> {
}
